package cn.ibizlab.core.uaa.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.core.uaa.domain.SysOpenAccess;
import cn.ibizlab.core.uaa.filter.SysOpenAccessSearchContext;
import cn.ibizlab.core.uaa.service.ISysOpenAccessService;

import cn.ibizlab.util.helper.CachedBeanCopier;
import cn.ibizlab.util.helper.DEFieldCacheMap;


import cn.ibizlab.core.uaa.client.SysOpenAccessFeignClient;

/**
 * 实体[第三方认证平台] 服务对象接口实现
 */
@Slf4j
@Service
public class SysOpenAccessServiceImpl implements ISysOpenAccessService {

    @Autowired
    SysOpenAccessFeignClient sysOpenAccessFeignClient;


    @Override
    public boolean create(SysOpenAccess et) {
        SysOpenAccess rt = sysOpenAccessFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }

    public void createBatch(List<SysOpenAccess> list){
        sysOpenAccessFeignClient.createBatch(list) ;
    }

    @Override
    public boolean update(SysOpenAccess et) {
        SysOpenAccess rt = sysOpenAccessFeignClient.update(et.getId(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }

    public void updateBatch(List<SysOpenAccess> list){
        sysOpenAccessFeignClient.updateBatch(list) ;
    }

    @Override
    public boolean remove(String id) {
        boolean result=sysOpenAccessFeignClient.remove(id) ;
        return result;
    }

    public void removeBatch(Collection<String> idList){
        sysOpenAccessFeignClient.removeBatch(idList);
    }

    @Override
    public SysOpenAccess get(String id) {
		SysOpenAccess et=sysOpenAccessFeignClient.get(id);
        if(et==null){
            et=new SysOpenAccess();
            et.setId(id);
        }
        else{
        }
        return  et;
    }

    @Override
    public SysOpenAccess getDraft(SysOpenAccess et) {
        et=sysOpenAccessFeignClient.getDraft();
        return et;
    }

    @Override
    public boolean checkKey(SysOpenAccess et) {
        return sysOpenAccessFeignClient.checkKey(et);
    }
    @Override
    @Transactional
    public boolean save(SysOpenAccess et) {
        if(et.getId()==null) et.setId((String)et.getDefaultKey(true));
        if(!sysOpenAccessFeignClient.save(et))
            return false;
        return true;
    }

    @Override
    public void saveBatch(List<SysOpenAccess> list) {
        sysOpenAccessFeignClient.saveBatch(list) ;
    }





    /**
     * 查询集合 DEFAULT
     */
    @Override
    public Page<SysOpenAccess> searchDefault(SysOpenAccessSearchContext context) {
        Page<SysOpenAccess> sysOpenAccesss=sysOpenAccessFeignClient.searchDefault(context);
        return sysOpenAccesss;
    }



}


