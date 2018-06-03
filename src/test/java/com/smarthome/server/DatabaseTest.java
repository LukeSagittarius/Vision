package com.smarthome.server;

import com.smarthome.server.facade.MinisterialEffectMaintenanceService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.io.IOException;

@RunWith(SpringRunner.class)
@SpringBootTest()
public class DatabaseTest {

    @Autowired
    MinisterialEffectMaintenanceService facade;

    @Test
    public void shouldPersistAndRetrieveDevices() throws IOException {
//        DevicesDto expected = new Application().getDevices();
//        facade.save(DevicesAssembler.dtoToEntity(expected));
//        Devices entity = facade.findById(1L);
//        DevicesDto result = DevicesAssembler.entityToDto(entity);
//        Assert.assertTrue(result.equals(expected));
    }
}
