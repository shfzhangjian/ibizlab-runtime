package cn.ibizlab.api.dto;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.math.BigInteger;
import java.util.Map;
import java.util.HashMap;
import java.io.Serializable;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.alibaba.fastjson.annotation.JSONField;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import cn.ibizlab.util.domain.DTOBase;
import cn.ibizlab.util.domain.DTOClient;
import lombok.Data;

/**
 * 服务DTO对象[SysRolePermissionDTO]
 */
@Data
public class SysRolePermissionDTO extends DTOBase implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 属性 [SYS_ROLE_PERMISSIONID]
     *
     */
    @JSONField(name = "rolepermissionid")
    @JsonProperty("rolepermissionid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String rolepermissionid;

    /**
     * 属性 [SYS_ROLEID]
     *
     */
    @JSONField(name = "roleid")
    @JsonProperty("roleid")
    @Size(min = 0, max = 100, message = "内容长度必须小于等于[100]")
    private String roleid;

    /**
     * 属性 [SYS_ROLENAME]
     *
     */
    @JSONField(name = "rolename")
    @JsonProperty("rolename")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String rolename;

    /**
     * 属性 [SYS_PERMISSIONID]
     *
     */
    @JSONField(name = "permissionid")
    @JsonProperty("permissionid")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String permissionid;

    /**
     * 属性 [SYS_PERMISSIONNAME]
     *
     */
    @JSONField(name = "permissionname")
    @JsonProperty("permissionname")
    @Size(min = 0, max = 200, message = "内容长度必须小于等于[200]")
    private String permissionname;

    /**
     * 属性 [PERMISSIONTYPE]
     *
     */
    @JSONField(name = "permissiontype")
    @JsonProperty("permissiontype")
    @Size(min = 0, max = 60, message = "内容长度必须小于等于[60]")
    private String permissiontype;

    /**
     * 属性 [PERMISSIONENABLE]
     *
     */
    @JSONField(name = "permissionenable")
    @JsonProperty("permissionenable")
    private Integer permissionenable;

    /**
     * 属性 [CREATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "createdate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("createdate")
    private Timestamp createdate;

    /**
     * 属性 [UPDATEDATE]
     *
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss", locale = "zh" , timezone="GMT+8")
    @JSONField(name = "updatedate" , format="yyyy-MM-dd HH:mm:ss")
    @JsonProperty("updatedate")
    private Timestamp updatedate;


    /**
     * 设置 [SYS_ROLEID]
     */
    public void setRoleid(String  roleid){
        this.roleid = roleid ;
        this.modify("sys_roleid",roleid);
    }

    /**
     * 设置 [SYS_PERMISSIONID]
     */
    public void setPermissionid(String  permissionid){
        this.permissionid = permissionid ;
        this.modify("sys_permissionid",permissionid);
    }


}


