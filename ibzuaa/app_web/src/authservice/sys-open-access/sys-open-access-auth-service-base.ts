import AuthService from '../auth-service';

/**
 * 第三方认证平台权限服务对象基类
 *
 * @export
 * @class SysOpenAccessAuthServiceBase
 * @extends {AuthService}
 */
export default class SysOpenAccessAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  SysOpenAccessAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  SysOpenAccessAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof SysOpenAccessAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = JSON.parse(JSON.stringify(this.defaultOPPrivs));
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}