package com.smarthome.server.dto;

import com.smarthome.server.entity.Area;


public class MinisterialEffectDto {

    public MinisterialEffectDto() {}

    public MinisterialEffectDto(String code) {
        this.code = code;
    }

    private Long id;

    private String code;

    private String name;

    private String profile;

    private Integer stage;

    private Area area;

    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Integer getStage() {
        return stage;
    }

    public void setStage(Integer stage) {
        this.stage = stage;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}