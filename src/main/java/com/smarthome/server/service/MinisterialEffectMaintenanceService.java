package com.smarthome.server.service;

import com.smarthome.server.entity.MinisterialEffect;
import org.springframework.data.repository.CrudRepository;
import javax.validation.constraints.NotNull;

public interface MinisterialEffectMaintenanceService extends CrudRepository<MinisterialEffect, Long> {

    MinisterialEffect findById(@NotNull Long id);
}