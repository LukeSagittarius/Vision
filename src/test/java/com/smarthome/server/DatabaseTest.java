package com.smarthome.server;

import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.MinisterialEffect;
import com.smarthome.server.service.MinisterialEffectMaintenanceService;
import com.smarthome.server.mapper.MinisterialEffectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


@RunWith(SpringRunner.class)
@SpringBootTest()
public class DatabaseTest {

    private static final String MINISTERIAL_EFFECT_CODE = "ME000001";

    @Autowired
    MinisterialEffectMaintenanceService ministerialEffectMaintenanceService;

    @Test
    public void shouldPersistAndRetrieveDevices() {
        MinisterialEffectDto expected = new MinisterialEffectDto(MINISTERIAL_EFFECT_CODE);
        MinisterialEffect entityToSave = Mappers.getMapper(MinisterialEffectMapper.class).dtoToEntity(expected);
        ministerialEffectMaintenanceService.save(entityToSave);
        MinisterialEffect foundEntity = ministerialEffectMaintenanceService.findByCode(MINISTERIAL_EFFECT_CODE);
        MinisterialEffectDto result = Mappers.getMapper(MinisterialEffectMapper.class).entityToDto(foundEntity);
        assertThat(expected.getCode(), is(result.getCode()));
    }
}