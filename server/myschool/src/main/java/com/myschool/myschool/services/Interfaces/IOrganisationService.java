package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.OrganizationDto;

import java.util.List;

public interface IOrganisationService {
    OrganizationDto create(OrganizationDto organizationDto);

    OrganizationDto update(OrganizationDto organizationDto);
    boolean delete(long organizationId);

    List<OrganizationDto> getAll();

}






