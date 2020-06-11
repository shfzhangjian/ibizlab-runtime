package cn.ibizlab.core.dict.filter;

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
 * ServiceApi数据实体[IBZDictItem] 查询条件对象
 */
@Slf4j
@Data
public class IBZDictItemSearchContext extends SearchContextBase {
	private String n_ibzdictitemname_like;//[栏目显示值]

	private String n_dictitemval_like;//[栏目值]

	private String n_dictid_eq;//[字典标识]

}



