package cn.ibizlab.core.extensions.service;

import cn.ibizlab.core.ou.service.impl.IBZEmployeeServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.core.ou.domain.IBZEmployee;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[人员] 自定义服务对象
 */
@Slf4j
@Primary
@Service("IBZEmployeeExService")
public class IBZEmployeeExService extends IBZEmployeeServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[InitPwd]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public IBZEmployee initPwd(IBZEmployee et) {
        return super.initPwd(et);
    }
}
