<template>
<div class='view-container detreeexpview sys-department-tree-exp-view'>
    <app-studioaction :viewTitle="$t(model.srfCaption)" viewName="sysdepartmenttreeexpview"></app-studioaction>
    <card class='view-card   view-no-toolbar'  :dis-hover="true" :bordered="false">
        <div slot='title' class="header-container">
        <span class='caption-info'>{{$t(model.srfCaption)}}</span>
        </div>

            <div class='view-top-messages'>
            </div>
        <div class='content-container'>
        <div class='view-body-messages'>
        </div>
            <view_treeexpbar 
                :viewState="viewState"  
                :viewparams="viewparams" 
                :context="context" 
                :viewUID="viewUID"
                :newdata="newdata"
                :opendata="opendata"
                name="treeexpbar"  
                ref='treeexpbar' 
                @selectionchange="treeexpbar_selectionchange($event)"  
                @activated="treeexpbar_activated($event)"  
                @load="treeexpbar_load($event)"  
                @closeview="closeView($event)">
            </view_treeexpbar>
        </div>
            <div class='view-bottom-messages'>
            </div>
    </card>
</div>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch,Inject } from 'vue-property-decorator';
import { UIActionTool,Util } from '@/utils';
import NavDataService from '@/service/app/navdata-service';
import { Subject,Subscription } from 'rxjs';
import SysDepartmentService from '@/service/sys-department/sys-department-service';
import SysDepartmentAuthService from '@/authservice/sys-department/sys-department-auth-service';

import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';


import SysDepartmentUIService from '@/uiservice/sys-department/sys-department-ui-service';

@Component({
    components: {
    },
})
export default class SysDepartmentTreeExpViewBase extends Vue {

    /**
     * 实体服务对象
     *
     * @type {SysDepartmentService}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public appEntityService: SysDepartmentService = new SysDepartmentService;

    /**
     * 实体UI服务对象
     *
     * @type SysDepartmentUIService
     * @memberof SysDepartmentTreeExpViewBase
     */
    public appUIService: SysDepartmentUIService = new SysDepartmentUIService(this.$store);
    
    /**
     * 数据变化
     *
     * @param {*} val
     * @returns {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Emit() 
    public viewDatasChange(val: any):any {
        return val;
    }

    /**
     * 传入视图上下文
     *
     * @type {string}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Prop() public viewdata!: string;

    /**
     * 传入视图参数
     *
     * @type {string}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Prop() public viewparam!: string;

    /**
     * 视图默认使用
     *
     * @type {boolean}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Prop({ default: true }) public viewDefaultUsage!: boolean;

    /**
     * 视图默认使用
     *
     * @type {string}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Inject({from:'navModel',default: 'tab'})
    public navModel!:string;

	/**
	 * 视图标识
	 *
	 * @type {string}
	 * @memberof SysDepartmentTreeExpViewBase
	 */
	public viewtag: string = '0f73ceaa7ce0ec11d9b6aaf27e05ad4f';

	/**
	 * 自定义视图导航上下文集合
	 *
	 * @type {*}
	 * @memberof SysDepartmentTreeExpViewBase
	 */
    public customViewNavContexts:any ={
    };

	/**
	 * 自定义视图导航参数集合
	 *
	 * @type {*}
	 * @memberof SysDepartmentTreeExpViewBase
	 */
    public customViewParams:any ={
    };

    /**
     * 视图模型数据
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public model: any = {
        srfCaption: 'entities.sysdepartment.views.treeexpview.caption',
        srfTitle: 'entities.sysdepartment.views.treeexpview.title',
        srfSubTitle: 'entities.sysdepartment.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 视图参数变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Watch('viewparam',{immediate: true, deep: true})
    onParamData(newVal: any, oldVal: any) {
        if(newVal){
            this.viewparams = {};
            if(typeof newVal == 'string') {
                Object.assign(this.viewparams, JSON.parse(this.viewparam));
            }else{
                this.viewparams = Util.deepCopy(this.viewparam);
            }
            
        } 
    }

    /**
     * 处理应用上下文变化
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Watch('viewdata')
    onViewData(newVal: any, oldVal: any) {
        const _this: any = this;
        
        if (!Object.is(newVal, oldVal) && _this.engine) {
            this.$nextTick(()=>{
              _this.parseViewParam();
              _this.engine.load();
            });
        } else if(!Object.is(newVal, oldVal) && _this.refresh && _this.refresh instanceof Function) {
            _this.refresh();
        }
    }

    /**
     * 容器模型
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };

    /**
     *  计数器刷新
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }

    /**
     * 视图状态订阅对象
     *
     * @public
     * @type {Subject<{action: string, data: any}>}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public viewState: Subject<ViewState> = new Subject();


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysDepartmentTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'sysdepartment',
            majorPSDEField: 'deptname',
            isLoadDefault: true,
        });
    }

    /**
     * 应用导航服务
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public  navDataService = NavDataService.getInstance(this.$store);

    /**
    * 导航服务事件
    *
    * @public
    * @type {(Subscription | undefined)}
    * @memberof SysDepartmentTreeExpViewBase
    */
    public serviceStateEvent: Subscription | undefined;

    /**
     * 门户部件状态对象
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    @Prop() public portletState?: any;

   /**
   * 门户部件状态事件
   *
   * @public
   * @type {(Subscription | undefined)}
   * @memberof SysDepartmentTreeExpViewBase
   */
    public portletStateEvent: Subscription | undefined;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public context:any = {};

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public viewparams:any = {};

    /**
     * 视图缓存数据
     *
     * @type {*}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public viewCacheData:any;


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysDepartmentTreeExpViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 解析视图参数
     *
     * @public
     * @memberof SysDepartmentTreeExpViewBase
     */
    public parseViewParam(inputvalue:any = null): void {
        for(let key in this.context){
            delete this.context[key];
        }
        if(this.$store.getters.getAppData() && this.$store.getters.getAppData().context){
            Object.assign(this.context,this.$store.getters.getAppData().context);
        }
        if (!this.viewDefaultUsage && this.viewdata && !Object.is(this.viewdata, '')) {
            if(typeof this.viewdata == 'string') {
                Object.assign(this.context, JSON.parse(this.viewdata));
            }
            if(this.context && this.context.srfparentdename){
                Object.assign(this.viewparams,{srfparentdename:this.context.srfparentdename});
            }
            if(this.context && this.context.srfparentkey){
                Object.assign(this.viewparams,{srfparentkey:this.context.srfparentkey});
            }
            this.handleCustomViewData();
            return;
        }
        const path = (this.$route.matched[this.$route.matched.length - 1]).path;
        const keys: Array<any> = [];
        const curReg = this.$pathToRegExp.pathToRegexp(path, keys);
        const matchArray = curReg.exec(this.$route.path);
        let tempValue: Object = {};
        keys.forEach((item: any, index: number) => {
            Object.defineProperty(tempValue, item.name, {
                enumerable: true,
                value: matchArray[index + 1]
            });
        });
        this.$viewTool.formatRouteParams(tempValue,this.$route,this.context,this.viewparams);
        if(inputvalue){
            Object.assign(this.context,{'sysdepartment':inputvalue});
        }
        //初始化视图唯一标识
        Object.assign(this.context,{srfsessionid:this.$util.createUUID()});
        this.handleCustomViewData();
        //初始化导航数据
        this.initNavDataWithRoute();
    }

    /**
     * 处理自定义视图数据
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
	public handleCustomViewData(){
		if(Object.keys(this.customViewNavContexts).length > 0){
			Object.keys(this.customViewNavContexts).forEach((item:any) =>{
				let tempContext:any = {};
				let curNavContext:any = this.customViewNavContexts[item];
				this.handleCustomDataLogic(curNavContext,tempContext,item);
				Object.assign(this.context,tempContext);
			})
		}
		if(Object.keys(this.customViewParams).length > 0){
			Object.keys(this.customViewParams).forEach((item:any) =>{
				let tempParam:any = {};
				let curNavParam:any = this.customViewParams[item];
				this.handleCustomDataLogic(curNavParam,tempParam,item);
				Object.assign(this.viewparams,tempParam);
			})
		}
	}

    /**
     * 处理自定义视图数据逻辑
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
	public handleCustomDataLogic(curNavData:any,tempData:any,item:string){
		// 直接值直接赋值
		if(curNavData.isRawValue){
			if(Object.is(curNavData.value,"null") || Object.is(curNavData.value,"")){
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: null,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }else{
                Object.defineProperty(tempData, item.toLowerCase(), {
                    value: curNavData.value,
                    writable : true,
                    enumerable : true,
                    configurable : true
                });
            }
		}else{
			// 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
			if(this.context[(curNavData.value).toLowerCase()] != null){
				Object.defineProperty(tempData, item.toLowerCase(), {
					value: this.context[(curNavData.value).toLowerCase()],
					writable : true,
					enumerable : true,
					configurable : true
				});
			}else{
				if(this.viewparams[(curNavData.value).toLowerCase()] != null){
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: this.viewparams[(curNavData.value).toLowerCase()],
						writable : true,
						enumerable : true,
						configurable : true
					});
				}else{
					Object.defineProperty(tempData, item.toLowerCase(), {
						value: null,
						writable : true,
						enumerable : true,
						configurable : true
					});
				}
			}
		}
	}

    /**
     * 初始化导航数据(路由模式)
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public initNavDataWithRoute(data:any = null, isNew:boolean = false,  isAlways:boolean = false){
        if( isAlways || (this.viewDefaultUsage && Object.is(this.navModel,"route")) ){
            this.navDataService.addNavData({id:'sys-department-tree-exp-view',tag:this.viewtag,srfkey:isNew ? null : this.context.sysdepartment,title:this.$t(this.model.srfCaption),data:data,context:this.context,viewparams:this.viewparams,path:this.$route.fullPath});
        }
    }

    /**
     * 初始化导航数据(分页模式)
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public initNavDataWithTab(data:any = null,isOnlyAdd:boolean = true, isAlways:boolean = false){
        if( isAlways || (this.viewDefaultUsage && !Object.is(this.navModel,"route")) ){
            this.navDataService.addNavDataByOnly({id:'sys-department-tree-exp-view',tag:this.viewtag,srfkey:this.context.sysdepartment,title:this.$t(this.model.srfCaption),data:data,context:this.context,viewparams:this.viewparams,path:this.$route.fullPath},isOnlyAdd);
        }
    }
	

    /**
     * Vue声明周期
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     * @memberof SysDepartmentTreeExpViewBase
     */    
    public afterCreated(){
        let _this:any = this;
        const secondtag = _this.$util.createUUID();
        _this.$store.commit('viewaction/createdView', { viewtag: _this.viewtag, secondtag: secondtag });
        _this.viewtag = secondtag;
        _this.parseViewParam();
        _this.serviceStateEvent = _this.navDataService.serviceState.subscribe(({ action,name, data }:{ action:string,name:any,data:any }) => {
            if(!Object.is(name,'sys-department-tree-exp-view')){
                return;
            }
            if (Object.is(action, 'viewrefresh')) {
                _this.$nextTick(()=>{
                    _this.parseViewParam(data);
                    if(_this.engine){
                        _this.engine.load();
                    }
                }); 
            }
        });
        if(_this.portletState){
            _this.portletStateEvent = _this.portletState.subscribe((res:any) =>{
                if(!Object.is(res.name,'SysDepartmentTreeExpView')){
                    return;
                }
                if(Object.is(res.action,'refresh') && _this.refresh && _this.refresh instanceof Function){
                    _this.refresh();
                }
            })
        }
        
    }

    /**
     * 销毁之前
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public beforeDestroy() {
        this.$store.commit('viewaction/removeView', this.viewtag);
    }

    /**
     * Vue声明周期(组件初始化完毕)
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public mounted() {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     * 
     * @memberof SysDepartmentTreeExpViewBase
     */
    public afterMounted(){
        const _this: any = this;
        _this.engineInit();
        if (_this.loadModel && _this.loadModel instanceof Function) {
            _this.loadModel();
        }
        
    }


    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysDepartmentTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any) {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }


    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysDepartmentTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any) {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }


    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysDepartmentTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any) {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }



    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysDepartmentTreeExpView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof SysDepartmentTreeExpView
     */
    public opendata(args: any[],fullargs?:any,params?: any, $event?: any, xData?: any) {
        if(!this.viewDefaultUsage){
            if(Object.is(this.navModel,"route")){
                this.initNavDataWithRoute(this.viewCacheData, false, true);
            }else{
                this.initNavDataWithTab(this.viewCacheData, false, true);
            }
        }
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 关闭视图
     *
     * @param {any[]} args
     * @memberof SysDepartmentTreeExpViewBase
     */
    public closeView(args: any[]): void {
        let _view: any = this;
        if (_view.viewdata) {
            _view.$emit('viewdataschange', [args]);
            _view.$emit('close', [args]);
        } else if (_view.$tabPageExp) {
            _view.$tabPageExp.onClose(_view.$route.fullPath);
        }
    }

    /**
     * 销毁视图回调
     *
     * @memberof SysDepartmentTreeExpViewBase
     */
    public destroyed(){
        this.afterDestroyed();
    }

    /**
     * 执行destroyed后的逻辑
     * 
     * @memberof SysDepartmentTreeExpViewBase
     */
    public afterDestroyed(){
        if(this.viewDefaultUsage){
            let localStoreLength = Object.keys(localStorage);
            if(localStoreLength.length > 0){
                localStoreLength.forEach((item:string) =>{
                if(item.startsWith(this.context.srfsessionid)){
                    localStorage.removeItem(item);
                }
                })
            }
            if(Object.is(this.navModel,"tab")){
                this.navDataService.removeNavDataByTag(this.viewtag);
            }
            if (this.serviceStateEvent) {
                this.serviceStateEvent.unsubscribe();
            }
        }
        // 销毁计数器定时器
        if(this.counterServiceArray && this.counterServiceArray.length >0){
            this.counterServiceArray.forEach((item:any) =>{
                if(item.destroyCounter && item.destroyCounter instanceof Function){
                    item.destroyCounter();
                }
            })
        }
        if(this.portletStateEvent){
            this.portletStateEvent.unsubscribe();
        }
    }
    
    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof SysDepartmentTreeExpViewBase
     */
    public viewUID: string = 'ou-sys-department-tree-exp-view';
    
}
</script>

<style lang='less'>
@import './sys-department-tree-exp-view.less';
</style>