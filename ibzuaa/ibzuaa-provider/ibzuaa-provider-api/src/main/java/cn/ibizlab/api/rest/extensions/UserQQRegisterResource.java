package cn.ibizlab.api.rest.extensions;

import cn.ibizlab.core.uaa.extensions.service.UserQQRegisterService;
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;


@RestController
public class UserQQRegisterResource {

    @Autowired
    private UserQQRegisterService userQQRegisterService;
    @Autowired
    private IBZUSERService ibzuserService;
    @Autowired
    private AuthTokenUtil jwtTokenUtil;
    @Autowired
    @Qualifier("UAAUserService")
    private AuthenticationUserService userDetailsService;

    @Value("${ibiz.auth.qq.appid:101882103}")// qq互联appid
    private String qqAppId;
    @Value("${ibiz.auth.qq.appkey:64ebdde56c1aeeacf0c312b49ddc42e1}")// qq互联appkey
    private String qqAppKey;
    @Value("${ibiz.auth.qq.redirect_uri:http://passport.ibizlab.cn/assets/qqRedirect.html}")// qq互联应用回调地址
    private String qqRedirectUri;


    /**
     * 获取QQ互联平台创建的网站应用appid
     */
    @GetMapping(value = "/uaa/getQQAppId")
    public ResponseEntity<JSONObject> getQQAppId() {
        JSONObject obj = new JSONObject();
        String appid = qqAppId;
        if (!StringUtils.isEmpty(appid)) {
            obj.put("appid", appid);
        }

        return ResponseEntity.ok(obj);
    }

    /**
     * 根据code查QQ用户
     *
     * @param param
     * @return
     */
    @PostMapping(value = "/uaa/queryQQUserByCode")
    public ResponseEntity<JSONObject> queryQQUserByCode(@RequestBody JSONObject param) {
        JSONObject object = new JSONObject();
        // 空校验
        String code = param.getString("code");
        if (StringUtils.isEmpty(code))
            throw new BadRequestAlertException("code为空", "UserQQRegisterResource", "");

        // 通过code获取QQ用户信息
        String openid = null;
        String nickname = null;
        JSONObject returnObj = userQQRegisterService.requestQQUserByCode(code, qqRedirectUri, qqAppId, qqAppKey);
        if (!StringUtils.isEmpty(returnObj) && !returnObj.containsKey("errcode")) {
            openid = returnObj.getString("openid");
            nickname = returnObj.getString("nickname");
            object.put("openid", openid);
            object.put("nickname", nickname);
        }

        //根据openid查用户
        List<IBZUSER> ibzusers = ibzuserService.list(Wrappers.<IBZUSER>query().eq("avatar", openid));
        // 该QQ用户注册过账号，登录系统
        if (ibzusers.size() > 0) {
            IBZUSER ibzuser = ibzusers.get(0);
            object.put("ibzuser", ibzuser);

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
     * 绑定QQ并注册
     *
     * @param param
     * @return
     */
    @PostMapping(value = "/uaa/bindQQtoRegister")
    public ResponseEntity<JSONObject> bindQQtoRegister(@RequestBody JSONObject param) {
        JSONObject object = new JSONObject();
        // 空校验
        String loginname = param.getString("loginname");
        String password = param.getString("password");
        String code = param.getString("code");
        String state = param.getString("state");
        String openid = param.getString("openid");
        String nickname = param.getString("nickname");

        if (StringUtils.isEmpty(loginname))
            throw new BadRequestAlertException("用户名为空", "UserQQRegisterResource", "");
        if (StringUtils.isEmpty(password))
            throw new BadRequestAlertException("密码为空", "UserQQRegisterResource", "");
        if (StringUtils.isEmpty(code))
            throw new BadRequestAlertException("QQ授权code为空", "UserQQRegisterResource", "");
        if (StringUtils.isEmpty(state))
            throw new BadRequestAlertException("QQ授权state为空", "UserQQRegisterResource", "");
        if (StringUtils.isEmpty(openid))
            throw new BadRequestAlertException("QQ信息openid为空", "UserWechatRegisterResource", "");
        if (StringUtils.isEmpty(nickname))
            throw new BadRequestAlertException("QQ信息nickname为空", "UserWechatRegisterResource", "");

        // 检查用户名是否已被注册
        List<IBZUSER> ibzusers = ibzuserService.list(Wrappers.<IBZUSER>query().eq("loginname", loginname));
        if (ibzusers.size() > 0)
            throw new BadRequestAlertException("该用户名已被注册", "UserQQRegisterResource", "");

        IBZUSER ibzuser = new IBZUSER();
        if (StringUtils.isEmpty(openid)) {
            // 通过code获取微信用户信息
            JSONObject returnObj = userQQRegisterService.requestQQUserByCode(code, qqRedirectUri, qqAppId, qqAppKey);
            if (!StringUtils.isEmpty(returnObj)) {
                if (returnObj.containsKey("openid")) {
                    // 微信注册
                    String uuid = UUID.randomUUID().toString();
                    ibzuser.setPassword(password);
                    ibzuser.setLoginname(loginname);
                    ibzuser.setUserid("tencent-" + uuid);
                    ibzuser.setPersonname(returnObj.getString("nickname"));
                    ibzuser.setNickname(returnObj.getString("nickname"));
                    ibzuser.setAvatar(returnObj.getString("openid"));
                    userQQRegisterService.toRegister(ibzuser);
                } else {
                    throw new BadRequestAlertException("获取QQ授权用户相关信息失败!", "UserQQRegisterResource", "");
                }
            } else {
                throw new BadRequestAlertException("获取QQ授权用户相关信息失败!", "UserQQRegisterResource", "");
            }
        } else {
            // 已经有微信用户信息直接注册
            String uuid = UUID.randomUUID().toString();
            ibzuser.setPassword(password);
            ibzuser.setLoginname(loginname);
            ibzuser.setUserid("tencent-" + uuid);
            ibzuser.setPersonname(nickname);
            ibzuser.setNickname(nickname);
            ibzuser.setAvatar(openid);
            userQQRegisterService.toRegister(ibzuser);
        }

        // 注册成功，登录系统
        if (!StringUtils.isEmpty(ibzuser)) {
            object.put("ibzuser", ibzuser);
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