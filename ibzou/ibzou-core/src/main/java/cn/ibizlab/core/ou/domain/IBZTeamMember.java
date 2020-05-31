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


import com.baomidou.mybatisplus.annotation.*;
import cn.ibizlab.util.domain.EntityMP;


/**
 * 实体[组成员]
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName(value = "IBZTEAMMEMBER",resultMap = "IBZTeamMemberResultMap")
public class IBZTeamMember extends EntityMP implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 组成员标识
     */
    @DEField(isKeyField=true)
    @TableId(value= "teammemberid",type=IdType.UUID)
    @JSONField(name = "teammemberid")
    @JsonProperty("teammemberid")
    private String teammemberid;
    /**
     * 组标识
     */
    @TableField(value = "teamid")
    @JSONField(name = "teamid")
    @JsonProperty("teamid")
    private String teamid;
    /**
     * 组名称
     */
    @TableField(exist = false)
    @JSONField(name = "teamname")
    @JsonProperty("teamname")
    private String teamname;
    /**
     * 用户标识
     */
    @TableField(value = "userid")
    @JSONField(name = "userid")
    @JsonProperty("userid")
    private String userid;
    /**
     * 姓名
     */
    @TableField(exist = false)
    @JSONField(name = "personname")
    @JsonProperty("personname")
    private String personname;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.core.ou.domain.IBZEmployee emp;

    /**
     * 
     */
    @JsonIgnore
    @JSONField(serialize = false)
    @TableField(exist = false)
    private cn.ibizlab.core.ou.domain.IBZTeam team;



    /**
     * 设置 [组标识]
     */
    public void setTeamid(String teamid){
        this.teamid = teamid ;
        this.modify("teamid",teamid);
    }
    /**
     * 设置 [用户标识]
     */
    public void setUserid(String userid){
        this.userid = userid ;
        this.modify("userid",userid);
    }

    /**
     * 获取 [组成员标识]
     */
    public String getTeammemberid(){
        if(ObjectUtils.isEmpty(teammemberid)){
            teammemberid=(String)getDefaultKey(true);
        }
        return teammemberid;
    }

    @Override
    public Serializable getDefaultKey(boolean gen) {
        if((!ObjectUtils.isEmpty(this.getTeamid()))&&(!ObjectUtils.isEmpty(this.getUserid())))
            return DigestUtils.md5DigestAsHex(String.format("%s||%s" ,this.getTeamid(),this.getUserid()).getBytes());
        return null;
    }
}


