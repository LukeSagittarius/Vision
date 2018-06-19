package com.smarthome.server.mapper;

import com.smarthome.server.dto.EducationProgramDto;
import com.smarthome.server.entity.EducationProgram;
import org.mapstruct.Mapper;

@Mapper
public interface EducationProgramMapper {

    EducationProgramDto toDto(EducationProgram ministerialEffect);

    EducationProgram toEntity(EducationProgramDto ministerialEffectDto);
}