package com.smarthome.server.mapper;

import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.MinisterialEffect;
import javax.annotation.Generated;

@Generated(
        value = "org.mapstruct.ap.MappingProcessor",
        date = "2018-06-05T23:03:15+0200",
        comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_161 (Oracle Corporation)"
)
public class MinisterialEffectMapperImpl implements MinisterialEffectMapper {

    @Override
    public MinisterialEffectDto entityToDto(MinisterialEffect ministerialEffect) {
        if ( ministerialEffect == null ) {
            return null;
        }

        MinisterialEffectDto ministerialEffectDto = new MinisterialEffectDto();

        ministerialEffectDto.setCode( ministerialEffect.getCode() );
        ministerialEffectDto.setName( ministerialEffect.getName() );
        ministerialEffectDto.setProfile( ministerialEffect.getProfile() );
        ministerialEffectDto.setStage( ministerialEffect.getStage() );
        ministerialEffectDto.setArea( ministerialEffect.getArea() );
        ministerialEffectDto.setDescription( ministerialEffect.getDescription() );

        return ministerialEffectDto;
    }

    @Override
    public MinisterialEffect dtoToEntity(MinisterialEffectDto ministerialEffectDto) {
        if ( ministerialEffectDto == null ) {
            return null;
        }

        MinisterialEffect ministerialEffect = new MinisterialEffect();

        ministerialEffect.setCode( ministerialEffectDto.getCode() );
        ministerialEffect.setName( ministerialEffectDto.getName() );
        ministerialEffect.setProfile( ministerialEffectDto.getProfile() );
        ministerialEffect.setStage( ministerialEffectDto.getStage() );
        ministerialEffect.setArea( ministerialEffectDto.getArea() );
        ministerialEffect.setDescription( ministerialEffectDto.getDescription() );

        return ministerialEffect;
    }
}