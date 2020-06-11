package cn.ibizlab.core.workflow.service;

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

import cn.ibizlab.core.workflow.domain.WFGroup;
import cn.ibizlab.core.workflow.filter.WFGroupSearchContext;


/**
 * 实体[WFGroup] 服务对象接口
 */
public interface IWFGroupService{

    boolean remove(String key) ;
    void removeBatch(Collection<String> idList) ;
    boolean save(WFGroup et) ;
    void saveBatch(List<WFGroup> list) ;
    WFGroup get(String key) ;
    boolean create(WFGroup et) ;
    void createBatch(List<WFGroup> list) ;
    WFGroup getDraft(WFGroup et) ;
    boolean checkKey(WFGroup et) ;
    boolean update(WFGroup et) ;
    void updateBatch(List<WFGroup> list) ;
    Page<WFGroup> searchDefault(WFGroupSearchContext context) ;

}


