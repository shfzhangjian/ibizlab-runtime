package cn.ibizlab.api.mapping;

import org.mapstruct.*;
import cn.ibizlab.core.uaa.domain.SysRolePermission;
import cn.ibizlab.api.dto.SysRolePermissionDTO;
import cn.ibizlab.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SysRolePermissionMapping extends MappingBase<SysRolePermissionDTO, SysRolePermission> {


}
