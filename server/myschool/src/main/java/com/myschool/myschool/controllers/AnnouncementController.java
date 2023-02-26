package com.myschool.myschool.controllers;

import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.OrganizationDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;
import com.myschool.myschool.models.org.CreateOrgRequest;
import com.myschool.myschool.models.org.UpdateOrgRequest;
import com.myschool.myschool.services.Interfaces.IAnnouncementService;
import com.myschool.myschool.services.Interfaces.IOrganisationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/announcement")
@RequiredArgsConstructor
public class AnnouncementController {
    private  final IAnnouncementService announcementService;
    @GetMapping("/{orgId}")
    public List<AnnouncementDto> get(@PathVariable Long orgId)
    {
        return  announcementService.getAll(orgId);
    }

    @PostMapping
    public ResponseEntity<AnnouncementDto> create(@RequestBody @Validated CreateAnnouncementRequest announcementRequest){
        AnnouncementDto organizationDto = announcementService.create(announcementRequest);
        return  ResponseEntity.ok(organizationDto);
    }

    @PutMapping("/{orgId}/{id}")
    public ResponseEntity<AnnouncementDto> update(@PathVariable long orgId ,@PathVariable  long id ,@RequestBody @Validated UpdateAnnouncementRequest updateAnnouncementRequest){
        updateAnnouncementRequest.setId(id);
        updateAnnouncementRequest.setOrganizationId(orgId);
        AnnouncementDto announcementDto = announcementService.update(updateAnnouncementRequest);
        return  ResponseEntity.ok(announcementDto);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> update(@PathVariable  long id){
        Boolean announcementDto = announcementService.delete(id);
        return  ResponseEntity.ok(announcementDto);
    }
}
