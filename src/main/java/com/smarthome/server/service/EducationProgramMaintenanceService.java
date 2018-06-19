package com.smarthome.server.service;

import com.smarthome.server.entity.EducationProgram;
import org.springframework.data.repository.CrudRepository;

import javax.validation.constraints.NotNull;

public interface EducationProgramMaintenanceService extends CrudRepository<EducationProgram, Long> {

    EducationProgram findById(@NotNull Long id);
}
