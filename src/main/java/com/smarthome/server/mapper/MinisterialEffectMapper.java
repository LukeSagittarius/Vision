package com.smarthome.server.mapper;

import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.MinisterialEffect;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MinisterialEffectMapper {

    MinisterialEffectMapper INSTANCE = Mappers.getMapper( MinisterialEffectMapper.class );

    MinisterialEffectDto ministerialEffectToMinisterialEffectDto(MinisterialEffect ministerialEffect);

    MinisterialEffect ministerialEffectDtoToMinisterialEffect(MinisterialEffectDto ministerialEffectDto);
}