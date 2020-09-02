package cn.ibizlab.core.ou.service;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Collection;
import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.core.ou.domain.IBZOrganization;
import cn.ibizlab.core.ou.filter.IBZOrganizationSearchContext;


/**
 * 实体[IBZOrganization] 服务对象接口
 */
public interface IIBZOrganizationService{

    boolean create(IBZOrganization et) ;
    @CacheEvict(value="ibzorganization",allEntries=true)
    void createBatch(List<IBZOrganization> list) ;
    boolean update(IBZOrganization et) ;
    @CacheEvict(value="ibzorganization",allEntries=true)
    void updateBatch(List<IBZOrganization> list) ;
    boolean remove(String key) ;
    @CacheEvict(value="ibzorganization",allEntries=true)
    void removeBatch(Collection<String> idList) ;
    IBZOrganization get(String key) ;
    IBZOrganization getDraft(IBZOrganization et) ;
    boolean checkKey(IBZOrganization et) ;
    boolean save(IBZOrganization et) ;
    @CacheEvict(value="ibzorganization",allEntries=true)
    void saveBatch(List<IBZOrganization> list) ;
    Page<IBZOrganization> searchDefault(IBZOrganizationSearchContext context) ;
    List<IBZOrganization> selectByParentorgid(String orgid) ;
    @CacheEvict(value="ibzorganization",allEntries=true)
    void removeByParentorgid(String orgid) ;

}



