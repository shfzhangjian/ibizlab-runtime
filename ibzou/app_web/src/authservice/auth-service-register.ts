/**
 * 实体权限服务注册中心
 *
 * @export
 * @class AuthServiceRegister
 */
export class AuthServiceRegister {

    /**
     * 所有实体权限服务Map
     *
     * @protected
     * @type {*}
     * @memberof AuthServiceRegister
     */
    protected allAuthService: Map<string, () => Promise<any>> = new Map();

    /**
     * 已加载实体权限服务Map缓存
     *
     * @protected
     * @type {Map<string, any>}
     * @memberof AuthServiceRegister
     */
    protected serviceCache: Map<string, any> = new Map();

    /**
     * Creates an instance of AuthServiceRegister.
     * @memberof AuthServiceRegister
     */
    constructor() {
        this.init();
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof AuthServiceRegister
     */
    protected init(): void {
                this.allAuthService.set('ibzpost', () => import('@/authservice/ibzpost/ibzpost-auth-service'));
        this.allAuthService.set('ibzorganization', () => import('@/authservice/ibzorganization/ibzorganization-auth-service'));
        this.allAuthService.set('ibzteam', () => import('@/authservice/ibzteam/ibzteam-auth-service'));
        this.allAuthService.set('ibzdeptmember', () => import('@/authservice/ibzdept-member/ibzdept-member-auth-service'));
        this.allAuthService.set('ibzdepartment', () => import('@/authservice/ibzdepartment/ibzdepartment-auth-service'));
        this.allAuthService.set('ibzteammember', () => import('@/authservice/ibzteam-member/ibzteam-member-auth-service'));
        this.allAuthService.set('ibzemployee', () => import('@/authservice/ibzemployee/ibzemployee-auth-service'));
    }

    /**
     * 加载实体权限服务
     *
     * @protected
     * @param {string} serviceName
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    protected async loadService(serviceName: string): Promise<any> {
        const service = this.allAuthService.get(serviceName);
        if (service) {
            return service();
        }
    }

    /**
     * 获取应用实体权限服务
     *
     * @param {string} name
     * @returns {Promise<any>}
     * @memberof AuthServiceRegister
     */
    public async getService(name: string): Promise<any> {
        if (this.serviceCache.has(name)) {
            return this.serviceCache.get(name);
        }
        const authService: any = await this.loadService(name);
        if (authService && authService.default) {
            const instance: any = new authService.default();
            this.serviceCache.set(name, instance);
            return instance;
        }
    }

}
export const authServiceRegister: AuthServiceRegister = new AuthServiceRegister();