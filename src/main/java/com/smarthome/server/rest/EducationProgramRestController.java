package com.smarthome.server.rest;

import com.smarthome.server.dto.EducationProgramDto;
import com.smarthome.server.dto.MinisterialEffectDto;
import com.smarthome.server.entity.Area;
import com.smarthome.server.entity.EducationProgram;
import com.smarthome.server.entity.MinisterialEffect;
import com.smarthome.server.mapper.EducationProgramMapper;
import com.smarthome.server.mapper.MinisterialEffectMapper;
import com.smarthome.server.service.EducationProgramMaintenanceService;
import com.smarthome.server.service.MinisterialEffectMaintenanceService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/educationProgram")
public class EducationProgramRestController {

    @Autowired
    private EducationProgramMaintenanceService educationProgramMaintenanceService;

    @RequestMapping("/{id}")
    public EducationProgram getEducationProgram(@PathVariable("id") Long id){
        return educationProgramMaintenanceService.findById(id);
    }

    @RequestMapping("/all")
    public Iterable<EducationProgram> getEducationPrograms() {
        return educationProgramMaintenanceService.findAll();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity addEducationProgram(
            @RequestParam(value="course") @NotNull String course,
            @RequestParam(value="cycle") @NotNull String cycle,
            @RequestParam(value="degree") @NotNull String degree,
            @RequestParam(value="type") @NotNull String type,
            @RequestParam(value="title") @NotNull String title) {
        try {
            EducationProgramDto dto = createEducationProgramDto(course, cycle, degree, type, title);
            educationProgramMaintenanceService.save(
                    Mappers.getMapper(EducationProgramMapper.class).toEntity(dto));
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public ResponseEntity editEducationProgram(
            @RequestParam(value="id") @NotNull String id,
            @RequestParam(value="course") @NotNull String course,
            @RequestParam(value="cycle") @NotNull String cycle,
            @RequestParam(value="degree") @NotNull String degree,
            @RequestParam(value="type") @NotNull String type,
            @RequestParam(value="title") @NotNull String title) {
        try {
            EducationProgram educationProgram = educationProgramMaintenanceService.findById(Long.valueOf(id));
            if(educationProgram != null) {
                EducationProgramDto dto = createEducationProgramDto(course, cycle, degree, type, title);
                EducationProgram entity = Mappers.getMapper(EducationProgramMapper.class).toEntity(dto);
                educationProgramMaintenanceService.delete(Long.valueOf(id));
                educationProgramMaintenanceService.save(entity);
            }
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity deleteEducationProgram(@RequestParam(value="id") @NotNull String id) {
        try {
            EducationProgram educationProgram = educationProgramMaintenanceService.findById(Long.valueOf(id));
            if(educationProgram != null) {
                educationProgramMaintenanceService.delete(educationProgram);
            }
        }
        catch (Exception e) {
            return new ResponseEntity(HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return new ResponseEntity(HttpStatus.OK);
    }


    private EducationProgramDto createEducationProgramDto(String course, String cycle, String degree,
                                                            String type, String title) {
        EducationProgramDto dto = new EducationProgramDto();
        dto.setCourse(course);
        dto.setCycle(cycle);
        dto.setDegree(degree);
        dto.setType(type);
        dto.setTitle(title);
        return dto;
    }
}