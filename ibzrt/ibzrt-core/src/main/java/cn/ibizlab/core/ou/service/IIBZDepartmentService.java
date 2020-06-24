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
import com.alibaba.fastjson.JSONObject;
import org.springframework.cache.annotation.CacheEvict;

import cn.ibizlab.core.ou.domain.IBZDepartment;
import cn.ibizlab.core.ou.filter.IBZDepartmentSearchContext;


/**
 * 实体[IBZDepartment] 服务对象接口
 */
public interface IIBZDepartmentService{

    boolean save(IBZDepartment et) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void saveBatch(List<IBZDepartment> list) ;
    IBZDepartment get(String key) ;
    boolean remove(String key) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void removeBatch(Collection<String> idList) ;
    boolean checkKey(IBZDepartment et) ;
    boolean update(IBZDepartment et) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void updateBatch(List<IBZDepartment> list) ;
    boolean create(IBZDepartment et) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void createBatch(List<IBZDepartment> list) ;
    IBZDepartment getDraft(IBZDepartment et) ;
    Page<IBZDepartment> searchDefault(IBZDepartmentSearchContext context) ;
    List<IBZDepartment> selectByParentdeptid(String deptid) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void removeByParentdeptid(String deptid) ;
    List<IBZDepartment> selectByOrgid(String orgid) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void removeByOrgid(String orgid) ;
    @CacheEvict(value="ibzdepartment",allEntries=true)
    void saveByOrgid(String orgid,List<IBZDepartment> list) ;

}



