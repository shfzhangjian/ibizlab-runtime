package cn.ibizlab.core.ou.domain;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.math.BigInteger;
import java.util.HashMap;
import java.math.BigDecimal;
import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.util.ObjectUtils;
import org.springframework.util.DigestUtils;
import cn.ibizlab.util.domain.EntityBase;
import cn.ibizlab.util.annotation.DEField;
import cn.ibizlab.util.enums.DEPredefinedFieldType;
import cn.ibizlab.util.enums.DEFieldDefaultValueType;
import java.io.Serializable;
import lombok.*;
import org.springframework.data.annotation.Transient;

import cn.ibizlab.util.domain.EntityClient;

/**
 * ServiceApi [单位机构] 对象
 */
@Data
public class IBZOrganization extends EntityClient implements Serializable {

    /**
     * 单位标识
     */
    @DEField(defaultValue = "orgcode" , defaultValueType = DEFieldDefaultValueType.PARAM , isKeyField=true)
    @JSONField(name = "orgid")
    @JsonProperty("orgid")
    private String orgid;

    /**
     * 单位代码
     */
    @JSONField(name = "orgcode")
    @JsonProperty("orgcode")
    private String orgcode;

    /**
     * 名称
     */
    @DEField(preType = DEPredefinedFieldType.ORGNAME)
    @JSONField(name = "orgname")
    @JsonProperty("orgname")
    private String orgname;

    /**
     * 上级单位
     */
    @DEField(name = "porgid")
    @JSONField(name = "parentorgid")
    @JsonProperty("parentorgid")
    private String parentorgid;

    /**
     * 单位简称
     */
    @JSONField(name = "shortname")
    @JsonProperty("shortname")
    private String shortname;

    /**
     * 单位级别
     */
    @JSONField(name = "orglevel")
    @JsonProperty("orglevel")
    private Integer orglevel;

    /**
     * 排序
     */
    @JSONField(name = "showorder")
    @JsonProperty("showorder")
    private Integer showorder;

    /**
     * 上级单位
     */
    @JSONField(name = "parentorgname")
    @JsonProperty("parentorgname")
    private String parentorgname;

    /**
     * 逻辑有效
     */
    @DEField(preType = DEPredefinedFieldType.LOGICVALID, logicval = "1" , logicdelval="0")
    @JSONField(name = "enable")
    @JsonProperty("enable")
    private Integer enable;

    /**
     * 创建时间
     */
    @DEField(preType = DEPredefinedFieldType.CREATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 最后修改时间
     */
    @DEField(preType = DEPredefinedFieldType.UPDATEDATE)
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;


    /**
     * 
     */
    @JSONField(name = "parentorg")
    @JsonProperty("parentorg")
    private cn.ibizlab.core.ou.domain.IBZOrganization parentorg;


    /**
     * 部门
     */
    @JSONField(name = "depts")
    @JsonProperty("depts")
    private List<cn.ibizlab.core.ou.domain.IBZDepartment> depts;



    /**
     * 设置 [单位代码]
     */
    public void setOrgcode(String orgcode){
        this.orgcode = orgcode ;
        this.modify("orgcode",orgcode);
    }
    /**
     * 设置 [上级单位]
     */
    public void setParentorgid(String parentorgid){
        this.parentorgid = parentorgid ;
        this.modify("porgid",parentorgid);
    }
    /**
     * 设置 [单位简称]
     */
    public void setShortname(String shortname){
        this.shortname = shortname ;
        this.modify("shortname",shortname);
    }
    /**
     * 设置 [单位级别]
     */
    public void setOrglevel(Integer orglevel){
        this.orglevel = orglevel ;
        this.modify("orglevel",orglevel);
    }
    /**
     * 设置 [排序]
     */
    public void setShoworder(Integer showorder){
        this.showorder = showorder ;
        this.modify("showorder",showorder);
    }

}

