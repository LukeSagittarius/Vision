package com.smarthome.server;

import com.smarthome.server.dto.*;
import com.smarthome.server.rest.RestService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;


@RunWith(SpringRunner.class)
@SpringBootTest()
public class RestServiceTest {

    @Test
    public void isResponseStatus200() throws IOException {
//        URL url = new URL(Application.DEVICES_LINK);
//        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//        connection.setRequestMethod(RequestMethod.GET.name());
//        connection.connect();
//        Assert.assertEquals(200, connection.getResponseCode());
    }

    @Test
    public void shouldReceiveDevicesReadings() throws IOException {
//        DevicesDto result = new Application().getDevices();
//        DevicesDto expected = DevicesBuilder.createDevice();
//        Assert.assertTrue(result.equals(expected));
    }
}
