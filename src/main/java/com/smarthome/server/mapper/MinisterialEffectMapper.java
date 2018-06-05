package com.smarthome.server.mapper;

import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.MinisterialEffect;
import org.mapstruct.Mapper;

@Mapper
public interface MinisterialEffectMapper {

    MinisterialEffectDto entityToDto(MinisterialEffect ministerialEffect);

    MinisterialEffect dtoToEntity(MinisterialEffectDto ministerialEffectDto);
}