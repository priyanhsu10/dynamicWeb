package com.myschool.myschool.controllers;

import com.myschool.myschool.models.OrganizationDto;
import com.myschool.myschool.models.org.CreateOrgRequest;
import com.myschool.myschool.models.org.UpdateOrgRequest;
import com.myschool.myschool.services.Interfaces.IOrganisationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.sql.BatchUpdateException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/org")
@RequiredArgsConstructor
public class OrganizationController {

    private  final IOrganisationService iOrganisationService;
    @GetMapping
    public List<OrganizationDto> get(HttpServletRequest httpServletRequest){
        return  iOrganisationService.getAll();
    }

    @PostMapping
    public ResponseEntity<OrganizationDto> create(@RequestBody @Validated  CreateOrgRequest createOrgRequest){
        OrganizationDto dto = OrganizationDto.builder().logo(createOrgRequest.getLogo()).name(createOrgRequest.getName()).address(createOrgRequest.getAddress()).build();
        OrganizationDto organizationDto = iOrganisationService.create(dto);
        return  ResponseEntity.ok(organizationDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrganizationDto> update(@PathVariable  long id ,@RequestBody @Validated UpdateOrgRequest updateOrgRequest){
        updateOrgRequest.setId(id);
        OrganizationDto dto = OrganizationDto.builder().id(updateOrgRequest.getId()).logo(updateOrgRequest.getLogo()).name(updateOrgRequest.getName()).address(updateOrgRequest.getAddress()).build();
        OrganizationDto organizationDto = iOrganisationService.update(dto);
        return  ResponseEntity.ok(organizationDto);
    }
}
