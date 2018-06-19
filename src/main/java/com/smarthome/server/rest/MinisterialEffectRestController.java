package com.smarthome.server.rest;

import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.Area;
import com.smarthome.server.entity.MinisterialEffect;
import com.smarthome.server.service.MinisterialEffectMaintenanceService;
import com.smarthome.server.mapper.MinisterialEffectMapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;


@RestController
@RequestMapping("/ministerialEffect")
public class MinisterialEffectRestController {

    @Autowired
    private MinisterialEffectMaintenanceService ministerialEffectMaintenanceService;

    @RequestMapping("/{id}")
    public MinisterialEffect getMinisterialEffect(@PathVariable("id") Long id){
        return ministerialEffectMaintenanceService.findById(id);
    }

    @RequestMapping("/all")
    public Iterable<MinisterialEffect> getMinisterialEffects() {
        return ministerialEffectMaintenanceService.findAll();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addMinisterialEffect(
            @RequestParam(value="code") @NotNull String code,
            @RequestParam(value="name") @NotNull String name,
            @RequestParam(value="profile") @NotNull String profile,
            @RequestParam(value="stage") @NotNull String stage,
            @RequestParam(value="area") @NotNull String area,
            @RequestParam(value="description") @NotNull String description) {
        try {
            MinisterialEffectDto dto = createMinisterialEffectDto(code, name, profile, stage, area, description);
            ministerialEffectMaintenanceService.save(
                    Mappers.getMapper(MinisterialEffectMapper.class).toEntity(dto));
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public ResponseEntity editMinisterialEffect(
            @RequestParam(value="id") @NotNull String id,
            @RequestParam(value="code") @NotNull String code,
            @RequestParam(value="name") @NotNull String name,
            @RequestParam(value="profile") @NotNull String profile,
            @RequestParam(value="stage") @NotNull String stage,
            @RequestParam(value="area") @NotNull String area,
            @RequestParam(value="description") @NotNull String description) {
        try {
            MinisterialEffect ministerialEffect = ministerialEffectMaintenanceService.findById(Long.valueOf(id));
            if(ministerialEffect != null) {
                MinisterialEffectDto dto = createMinisterialEffectDto(code, name, profile, stage, area, description);
                MinisterialEffect entity = Mappers.getMapper(MinisterialEffectMapper.class).toEntity(dto);
                ministerialEffectMaintenanceService.delete(Long.valueOf(id));
                ministerialEffectMaintenanceService.save(entity);
            }
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity deleteMinisterialEffect(@RequestParam(value="id") @NotNull String id) {
        try {
            MinisterialEffect ministerialEffect = ministerialEffectMaintenanceService.findById(Long.valueOf(id));
            if(ministerialEffect != null) {
                ministerialEffectMaintenanceService.delete(ministerialEffect);
            }
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.OK);
    }

    private MinisterialEffectDto createMinisterialEffectDto(String code, String name, String profile,
                                                            String stage, String areaName, String description) {
        MinisterialEffectDto dto = new MinisterialEffectDto();
        dto.setCode(code);
        dto.setName(name);
        dto.setProfile(profile);
        dto.setStage(Integer.valueOf(stage));
        Area area = new Area();
        area.setName(areaName);
        dto.setArea(area);
        dto.setDescription(description);
        return dto;
    }
}