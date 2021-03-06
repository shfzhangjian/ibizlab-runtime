package cn.ibizlab.util.job;

import cn.ibizlab.util.client.IBZUAAFeignClient;
import cn.ibizlab.util.client.IBZLiteFeignClient;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSONArray;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import org.springframework.util.DigestUtils;
import java.io.InputStream;
import java.util.*;

/**
 * 权限：向uaa同步当前系统菜单、权限资源任务类
 */
@Slf4j
@Component
@ConditionalOnProperty( name = "ibiz.enablePermissionValid", havingValue = "true")
public class PermissionSyncJob implements ApplicationRunner {

    @Autowired
    @Lazy
    private IBZUAAFeignClient client;

    @Value("${ibiz.systemid:ibzrt}")
    private String systemId;
    
    @Value("${ibiz.systemname:ibzrt}")
    private String systemName;



    @Autowired
    @Lazy
    IBZLiteFeignClient liteFeignClient;


    @Override
    public void run(ApplicationArguments args) {
        try {
            Thread.sleep(10000);
            InputStream permission = this.getClass().getResourceAsStream("/permission/systemResource.json"); //获取当前系统所有实体资源能力
            String permissionResult = IOUtils.toString(permission,"UTF-8");
            JSONObject system= new JSONObject();
            system.put("pssystemid",systemId);
            system.put("pssystemname",systemName);
            system.put("sysstructure",JSONObject.parseObject(permissionResult));
            system.put("md5check",DigestUtils.md5DigestAsHex(permissionResult.getBytes()));
            if(client.syncSysAuthority(system)) {
                log.info("向[UAA]同步系统资源成功");
            }else{
                log.error("向[UAA]同步系统资源失败");
            }
        }
        catch (Exception ex) {
            log.error(String.format("向[UAA]同步系统资源失败，请检查[UAA]服务是否正常! [%s]",ex));
        }

        try {
            InputStream sysModel = this.getClass().getResourceAsStream("/sysmodel/ibzrt.json"); //获取当前系统所有实体资源能力
            String strSysModel = IOUtils.toString(sysModel,"UTF-8");
            if(liteFeignClient.syncSysModel(JSONObject.parseObject(strSysModel))) {
                log.info("向[lite]同步系统模型成功");
            }else{
                log.error("向[lite]同步系统模型失败");
            }
        }
        catch (Exception ex) {
            log.error(String.format("向[lite]同步系统模型失败，请检查[lite]服务是否正常! [%s]",ex));
        }



    }
}