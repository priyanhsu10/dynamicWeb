package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.models.OrganizationDto;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.services.Interfaces.IOrganisationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrganisationService implements IOrganisationService {

    private final IOrganizationRepository iOrganizationRepository;

    @Transactional
    @Override
    public OrganizationDto create(OrganizationDto organizationDto) {

        //validate
        Organization org = new Organization();
        org.setName(organizationDto.getName());
        org.setLogo(organizationDto.getLogo());
        org.setAddress(organizationDto.getAddress());
        iOrganizationRepository.save(org);
       organizationDto.setId(org.getId());
        return  organizationDto;
    }
@Transactional
    @Override
    public OrganizationDto update(OrganizationDto organizationDto) {
        Organization org =iOrganizationRepository.findById(organizationDto.getId()).orElseThrow(() -> new RuntimeException("Org Not found"));

        org.setName(organizationDto.getName());
        org.setLogo(organizationDto.getLogo());
        org.setAddress(organizationDto.getAddress());
        iOrganizationRepository.save(org);
        organizationDto.setId(org.getId());
        return  organizationDto;
    }
@Transactional
    @Override
    public boolean delete(long organizationId) {
        Organization org =iOrganizationRepository.findById(organizationId).orElseThrow(() -> new RuntimeException("Org Not found"));
        iOrganizationRepository.delete(org);
        return  true;
    }

    @Override
    public List<OrganizationDto> getAll() {
        return iOrganizationRepository.findAll().stream()
                .map(x->new OrganizationDto(x.getId(),x.getName(),x.getLogo(),x.getAddress())).collect(Collectors.toList());
    }
}

