import wfremodel_zh_CN from '@locale/lanres/entities/wfremodel/wfremodel_zh_CN';
import wfmember_zh_CN from '@locale/lanres/entities/wfmember/wfmember_zh_CN';
import wfgroup_zh_CN from '@locale/lanres/entities/wfgroup/wfgroup_zh_CN';
import wfuser_zh_CN from '@locale/lanres/entities/wfuser/wfuser_zh_CN';
import wfprocessdefinition_zh_CN from '@locale/lanres/entities/wfprocess-definition/wfprocess-definition_zh_CN';
import wfsystem_zh_CN from '@locale/lanres/entities/wfsystem/wfsystem_zh_CN';
import components_zh_CN from '@locale/lanres/components/components_zh_CN';
import codelist_zh_CN from '@locale/lanres/codelist/codelist_zh_CN';
import userCustom_zh_CN from '@locale/lanres/userCustom/userCustom_zh_CN';

export default {
    app: {
        commonWords:{
            error: "失败",
            success: "成功",
            ok: "确认",
            cancel: "取消",
        },
        local:{
            new: "新建"
        },
        gridpage: {
            choicecolumns: "选择列",
            refresh: "刷新",
            show: "显示",
            records: "条",
            totle: "共",
        },
        tabpage: {
            sureclosetip: {
                title: "关闭提醒",
                content: "表单数据已经修改，确定要关闭？",
            },
            closeall: "关闭所有",
            closeother: "关闭其他",
        },
        fileUpload: {
            caption: "上传",
        },
        searchButton: {
            search: "搜索",
            reset: "重置",
        },
        calendar:{
          today: "今天",
          month: "月",
          week: "周",
          day: "天",
          list: "列",
          dateSelectModalTitle: "选择要跳转的时间",
          gotoDate: "跳转",
        },
        // 非实体视图
        views: {
            wfindexview: {
                caption: "ibizlab",
                title: "workflow",
            },
        },
        utilview:{
            importview:"导入数据",
            warning:"警告",
            info:"请配置数据导入项" 
        },
        menus: {
            wfindexview: {
                menuitem1: "流程定义",
                menuitem3: "发布新流程",
                menuitem2: "用户组",
            },
        },
    },
    entities: {
        wfremodel: wfremodel_zh_CN,
        wfmember: wfmember_zh_CN,
        wfgroup: wfgroup_zh_CN,
        wfuser: wfuser_zh_CN,
        wfprocessdefinition: wfprocessdefinition_zh_CN,
        wfsystem: wfsystem_zh_CN,
    },
    components: components_zh_CN,
    codelist: codelist_zh_CN,
    userCustom: userCustom_zh_CN,
};