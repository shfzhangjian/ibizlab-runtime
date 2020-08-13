import AuthService from '../auth-service';

/**
 * 单位机构权限服务对象基类
 *
 * @export
 * @class IBZOrganizationAuthServiceBase
 * @extends {AuthService}
 */
export default class IBZOrganizationAuthServiceBase extends AuthService {

    /**
     * Creates an instance of  IBZOrganizationAuthServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBZOrganizationAuthServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 根据当前数据获取实体操作标识
     *
     * @param {*} mainSateOPPrivs 传入数据操作标识
     * @returns {any}
     * @memberof IBZOrganizationAuthServiceBase
     */
    public getOPPrivs(mainSateOPPrivs:any):any{
        let curDefaultOPPrivs:any = this.getSysOPPrivs();
        if(mainSateOPPrivs){
            Object.assign(curDefaultOPPrivs,mainSateOPPrivs);
        }
        return curDefaultOPPrivs;
    }

}