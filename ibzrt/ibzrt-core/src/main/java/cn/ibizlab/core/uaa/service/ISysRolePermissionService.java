package cn.ibizlab.core.uaa.service;

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

import cn.ibizlab.core.uaa.domain.SysRolePermission;
import cn.ibizlab.core.uaa.filter.SysRolePermissionSearchContext;


/**
 * 实体[SysRolePermission] 服务对象接口
 */
public interface ISysRolePermissionService{

    SysRolePermission get(String key) ;
    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    SysRolePermission getDraft(SysRolePermission et) ;
    boolean create(SysRolePermission et) ;
    void createBatch(List<SysRolePermission> list) ;
    boolean checkKey(SysRolePermission et) ;
    boolean save(SysRolePermission et) ;
    void saveBatch(List<SysRolePermission> list) ;
    boolean update(SysRolePermission et) ;
    void updateBatch(List<SysRolePermission> list) ;
    Page<SysRolePermission> searchDefault(SysRolePermissionSearchContext context) ;
    List<SysRolePermission> selectByPermissionid(String permissionid) ;
    void removeByPermissionid(String permissionid) ;
    List<SysRolePermission> selectByRoleid(String roleid) ;
    void removeByRoleid(String roleid) ;

}


