package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Announcement;
import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;
import com.myschool.myschool.repositories.IAnnouncementRepository;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.services.Interfaces.IAnnouncementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnnouncementService implements IAnnouncementService {
    private final IAnnouncementRepository iAnnouncementRepository;
    private final IOrganizationRepository organizationRepository;

    @Transactional
    @Override
    public AnnouncementDto create(CreateAnnouncementRequest createAnnouncementRequest) {

        Announcement entity = new Announcement();
        entity.setTitle(createAnnouncementRequest.getTitle());
        entity.setDescription(createAnnouncementRequest.getDescription());
        entity.setEndDate(createAnnouncementRequest.getEndDate());
        entity.setStartDate(createAnnouncementRequest.getStartDate());
        Organization org = organizationRepository.getReferenceById(createAnnouncementRequest.getOrganizationId());
        entity.setOrganization(org);
        iAnnouncementRepository.save(entity);
        return AnnouncementDto.builder().id(entity.getId()).title(entity.getTitle()).endDate(entity.getEndDate()).startDate(entity.getStartDate())
                .organizationId(entity.getOrganization().getId()).build();

    }

    @Transactional
    @Override
    public AnnouncementDto update(UpdateAnnouncementRequest updateAnnouncementRequest) {
        Announcement entity = iAnnouncementRepository.findById(updateAnnouncementRequest.getId()).orElseThrow(() -> new RuntimeException("Announcement not found"));
        entity.setTitle(updateAnnouncementRequest.getTitle());
        entity.setDescription(updateAnnouncementRequest.getDescription());
        entity.setEndDate(updateAnnouncementRequest.getEndDate());
        entity.setStartDate(updateAnnouncementRequest.getStartDate());
        iAnnouncementRepository.save(entity);
        return AnnouncementDto.builder().id(entity.getId()).title(entity.getTitle()).endDate(entity.getEndDate()).startDate(entity.getStartDate())
                .description(entity.getDescription())
                .organizationId(entity.getOrganization().getId()).build();
    }

    @Transactional
    @Override
    public boolean delete(long announcementId) {
        Announcement entity = iAnnouncementRepository.findById(announcementId).orElseThrow(() -> new RuntimeException("Announcement not found"));
        iAnnouncementRepository.delete(entity);
        return false;
    }

    @Override
    public List<AnnouncementDto> getAll(Long orgId) {
        return iAnnouncementRepository.getAllAnnouncementByOrgId(orgId).stream()
                .map(x->{
                 var entity=   new AnnouncementDto();
                 entity.setId(x.getId());
                 entity.setTitle(x.getTitle());
                 entity.setDescription(x.getDescription());
                 entity.setStartDate(x.getStartDate());
                 entity.setEndDate(x.getEndDate());
                 entity.setOrganizationId(x.getOrganization().getId());
                 return entity;
                }).collect(Collectors.toList());
    }
}
