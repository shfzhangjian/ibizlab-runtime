package cn.ibizlab.api.mapping;

import org.mapstruct.*;
import cn.ibizlab.core.task.domain.JobsLog;
import cn.ibizlab.api.dto.JobsLogDTO;
import cn.ibizlab.util.domain.MappingBase;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {},
    nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE,
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface JobsLogMapping extends MappingBase<JobsLogDTO, JobsLog> {


}

