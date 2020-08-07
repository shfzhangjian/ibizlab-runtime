package cn.ibizlab.api.rest.extensions;

import cn.ibizlab.core.uaa.domain.SysOpenAccess;
import cn.ibizlab.core.uaa.domain.SysUserAuth;
import cn.ibizlab.core.uaa.extensions.service.UserWechatRegisterService;
import cn.ibizlab.core.uaa.service.ISysOpenAccessService;
import cn.ibizlab.core.uaa.service.ISysUserAuthService;
import cn.ibizlab.util.domain.IBZUSER;
import cn.ibizlab.util.errors.BadRequestAlertException;
import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.security.AuthTokenUtil;
import cn.ibizlab.util.security.AuthenticationUser;
import cn.ibizlab.util.service.AuthenticationUserService;
import cn.ibizlab.util.service.IBZUSERService;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
public class UserWechatRegisterResource {

    @Autowired
    private UserWechatRegisterService userWechatRegisterService;
    @Autowired
    private IBZUSERService ibzuserService;
    @Autowired
    private ISysUserAuthService sysUserAuthService;
    @Autowired
    private AuthTokenUtil jwtTokenUtil;
    @Autowired
    @Qualifier("UAAUserService")
    private AuthenticationUserService userDetailsService;
    @Autowired
    private ISysOpenAccessService openAccessService;

    /**
     * 获取微信开放平台创建的网站应用appid
     */
    @GetMapping(value = "/uaa/getWechatAppId")
    public ResponseEntity<JSONObject> getWechatAppId() {
        JSONObject obj = new JSONObject();
        SysOpenAccess openAccess = openAccessService.getById("webchart");
        if (openAccess==null || (openAccess.getDisabled()!=null && openAccess.getDisabled()==1))
            return ResponseEntity.ok(obj);
        String appId = openAccess.getAccessKey();// qq互联appid
        if (!StringUtils.isEmpty(appId)) {
            obj.put("appid", appId);
        }

        return ResponseEntity.ok(obj);
    }


    /**
     * 根据code查微信用户
     *
     * @param param
     * @return
     */
    @PostMapping(value = "/uaa/queryWechatUserByCode")
    public ResponseEntity<JSONObject> queryWechatUserByCode(@RequestBody JSONObject param) {
        JSONObject object = new JSONObject();
        // 空校验
        String code = param.getString("code");
        if (StringUtils.isEmpty(code))
            throw new BadRequestAlertException("code为空", "UserWechatRegisterResource", "");

        // 从数据库中获取微信授权应用信息
        SysOpenAccess openAccess = openAccessService.getById("webchart");
        if (openAccess==null || (openAccess.getDisabled()!=null && openAccess.getDisabled()==1))
            throw new BadRequestAlertException("未找到配置", "UserWechatRegisterResource", "");
        String appId = openAccess.getAccessKey();// 微信开放平台appid
        String appSecret = openAccess.getSecretKey();// 微信开放平台appsecret

        // 通过code获取微信用户信息
        String openid = null;
        String nickname = null;
        JSONObject returnObj = userWechatRegisterService.requestWechatUserByCode(code, null, appId, appSecret);
        if (!StringUtils.isEmpty(returnObj) && !returnObj.containsKey("errcode")) {
            openid = returnObj.getString("openid");
            nickname = returnObj.getString("nickname");
            object.put("openid", openid);
            object.put("nickname", nickname);
        }

        // 根据openid查用户授权信息
        SysUserAuth userAuth = sysUserAuthService.getOne(Wrappers.<SysUserAuth>query().eq("identifier", openid));
        // 该微信用户注册过账号，登录系统
        if (!StringUtils.isEmpty(userAuth)) {
            IBZUSER ibzuser = ibzuserService.getById(userAuth.getUserid());
            JSONObject ibzuserObj = new JSONObject();
            ibzuserObj.put("loginname", ibzuser.getLoginname());
            ibzuserObj.put("password", ibzuser.getPassword());
            object.put("ibzuser", ibzuserObj);

            // 生成登录token信息
            userDetailsService.resetByUsername(ibzuser.getLoginname());
            AuthenticationUser user = userDetailsService.loadUserByLogin(ibzuser.getLoginname(), ibzuser.getPassword());
            final String token = jwtTokenUtil.generateToken(user);
            AuthenticationUser user2 = new AuthenticationUser();
            CachedBeanCopier.copy(user, user2);
            user2.setAuthorities(null);
            user2.setPermissionList(null);
            object.put("token", token);
            object.put("user", user2);
        }

        return ResponseEntity.ok().body(object);
    }


    /**
     * 绑定微信并注册
     *
     * @param param
     * @return
     */
    @PostMapping(value = "/uaa/bindWechatToRegister")
    public ResponseEntity<JSONObject> bindWechatToRegister(@RequestBody JSONObject param) {
        JSONObject object = new JSONObject();
        // 空校验
        String loginname = param.getString("loginname");
        String password = param.getString("password");
        String openid = param.getString("openid");
        String nickname = param.getString("nickname");
        String code = param.getString("code");
        String state = param.getString("state");

        if (StringUtils.isEmpty(loginname))
            throw new BadRequestAlertException("用户名为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(password))
            throw new BadRequestAlertException("密码为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(openid))
            throw new BadRequestAlertException("微信信息openid为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(nickname))
            throw new BadRequestAlertException("微信信息nickname为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(code))
            throw new BadRequestAlertException("微信授权code为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(state))
            throw new BadRequestAlertException("微信授权state为空", "UserWechatRegisterResource", "");

        // 检查用户名是否已被注册
        List<IBZUSER> ibzusers = ibzuserService.list(Wrappers.<IBZUSER>query().eq("loginname", loginname));
        if (ibzusers.size() > 0)
            throw new BadRequestAlertException("该用户名已被注册", "UserWechatRegisterResource", "");

        // 微信用户注册
        IBZUSER ibzuser = new IBZUSER();
        String uuid = UUID.randomUUID().toString();
        ibzuser.setPassword(password);
        ibzuser.setLoginname(loginname);
        ibzuser.setUserid("wechat-" + uuid);
        ibzuser.setPersonname(nickname);
        ibzuser.setNickname(nickname);
        userWechatRegisterService.toRegister(ibzuser);
        // 创建微信用户授权信息
        SysUserAuth userAuth = new SysUserAuth();
        userAuth.setUserid(ibzuser.getUserid());
        userAuth.setIdentifier(openid);
        userAuth.setIdentityType("wechat");
        userWechatRegisterService.toCreateUserAuth(userAuth);

        // 注册成功，登录系统
        if (!StringUtils.isEmpty(ibzuser)) {
            JSONObject ibzuserObj = new JSONObject();
            ibzuserObj.put("loginname", ibzuser.getLoginname());
            ibzuserObj.put("password", ibzuser.getPassword());
            object.put("ibzuser", ibzuserObj);
        }

        //　生成登录token信息
        userDetailsService.resetByUsername(ibzuser.getLoginname());
        AuthenticationUser user = userDetailsService.loadUserByLogin(ibzuser.getLoginname(), ibzuser.getPassword());
        final String token = jwtTokenUtil.generateToken(user);
        AuthenticationUser user2 = new AuthenticationUser();
        CachedBeanCopier.copy(user, user2);
        user2.setAuthorities(null);
        user2.setPermissionList(null);
        object.put("token", token);
        object.put("user", user2);

        return ResponseEntity.ok().body(object);
    }

}
