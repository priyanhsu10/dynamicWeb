package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Event;
import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.models.EventDto;
import com.myschool.myschool.repositories.IEventRepository;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.services.Interfaces.IEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class EventService implements IEventService {
    private final IEventRepository eventRepository;
    private final IOrganizationRepository organizationRepository;

    @Transactional
    @Override
    public EventDto create(EventDto createAnnouncementRequest) {

        Event entity = new Event();
        entity.setTitle(createAnnouncementRequest.getTitle());
        entity.setDescription(createAnnouncementRequest.getDescription());
        entity.setEndDate(createAnnouncementRequest.getEndDate());
        entity.setStartDate(createAnnouncementRequest.getStartDate());
        Organization org = organizationRepository.getReferenceById(createAnnouncementRequest.getOrganizationId());
        entity.setOrganization(org);
        eventRepository.save(entity);
        return EventDto.builder().id(entity.getId()).title(entity.getTitle()).endDate(entity.getEndDate()).startDate(entity.getStartDate())
                .organizationId(entity.getOrganization().getId()).build();

    }

    @Transactional
    @Override
    public EventDto update(EventDto updateAnnouncementRequest) {
        Event entity = eventRepository.findById(updateAnnouncementRequest.getId()).orElseThrow(() -> new RuntimeException("Announcement not found"));
        entity.setTitle(updateAnnouncementRequest.getTitle());
        entity.setDescription(updateAnnouncementRequest.getDescription());
        entity.setEndDate(updateAnnouncementRequest.getEndDate());
        entity.setStartDate(updateAnnouncementRequest.getStartDate());
        eventRepository.save(entity);
        return EventDto.builder().id(entity.getId()).title(entity.getTitle()).endDate(entity.getEndDate()).startDate(entity.getStartDate())
                .description(entity.getDescription())
                .organizationId(entity.getOrganization().getId()).build();
    }

    @Transactional
    @Override
    public boolean delete(long announcementId) {
        Event entity = eventRepository.findById(announcementId).orElseThrow(() -> new RuntimeException("Announcement not found"));
        eventRepository.delete(entity);
        return false;
    }

    @Override
    public List<EventDto> getAll(Long orgId) {
        return eventRepository.getAllAnnouncementByOrgId(orgId).stream()
                .map(x->{
                    var entity=   new EventDto();
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
