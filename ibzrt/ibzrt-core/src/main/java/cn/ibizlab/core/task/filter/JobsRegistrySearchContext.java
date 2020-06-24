package cn.ibizlab.core.task.filter;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.alibaba.fastjson.annotation.JSONField;

import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;


import cn.ibizlab.util.filter.SearchContextBase;

/**
 * ServiceApi数据实体[JobsRegistry] 查询条件对象
 */
@Slf4j
@Data
public class JobsRegistrySearchContext extends SearchContextBase {
	private String n_app_like;//[服务名]

	private Integer n_status_eq;//[状态]

}



