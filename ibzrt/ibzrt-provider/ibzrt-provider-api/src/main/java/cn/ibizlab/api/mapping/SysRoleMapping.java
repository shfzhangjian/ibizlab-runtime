package cn.ibizlab.api.mapping;

import org.mapstruct.*;
import cn.ibizlab.core.uaa.domain.SysRole;
import cn.ibizlab.api.dto.SysRoleDTO;
import cn.ibizlab.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface SysRoleMapping extends MappingBase<SysRoleDTO, SysRole> {


}
