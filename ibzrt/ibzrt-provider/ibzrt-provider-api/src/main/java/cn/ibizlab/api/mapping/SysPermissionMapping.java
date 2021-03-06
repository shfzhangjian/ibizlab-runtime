package cn.ibizlab.api.mapping;

import org.mapstruct.*;
import cn.ibizlab.core.uaa.domain.SysPermission;
import cn.ibizlab.api.dto.SysPermissionDTO;
import cn.ibizlab.util.domain.MappingBase;

@Mapper(componentModel = "spring", uses = {}, implementationName = "apiSysPermissionMapping",
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
        nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SysPermissionMapping extends MappingBase<SysPermissionDTO, SysPermission> {


}

