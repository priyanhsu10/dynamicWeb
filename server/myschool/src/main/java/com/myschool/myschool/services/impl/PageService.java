package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.entities.Page;
import com.myschool.myschool.models.EventDto;
import com.myschool.myschool.models.PageDto;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.repositories.IPageRepository;
import com.myschool.myschool.services.Interfaces.IPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class PageService implements IPageService {
    private final IPageRepository pageRepository;
    private final IOrganizationRepository organizationRepository;

    @Transactional
    @Override
    public PageDto create(PageDto pageDto) {

        Page entity = new Page();
        entity.setTitle(pageDto.getTitle());
        entity.setContent(pageDto.getContent());
        Organization org = organizationRepository.getReferenceById(pageDto.getOrganizationId());
        entity.setOrganization(org);
        pageRepository.save(entity);
        return PageDto.builder().id(entity.getId()).title(entity.getTitle()).content(entity.getContent())
                .organizationId(entity.getOrganization().getId()).build();

    }

    @Transactional
    @Override
    public PageDto update(PageDto pageDto) {
        Page entity = pageRepository.findById(pageDto.getId()).orElseThrow(() -> new RuntimeException("Page not found"));
        entity.setTitle(pageDto.getTitle());
        entity.setContent(pageDto.getContent());
        pageRepository.save(entity);
        return PageDto.builder().id(entity.getId()).title(entity.getTitle())
                .content(entity.getContent())
                .organizationId(entity.getOrganization().getId()).build();
    }

    @Transactional
    @Override
    public boolean delete(long pagId) {
        Page entity = pageRepository.findById(pagId).orElseThrow(() -> new RuntimeException("Page not found"));
        pageRepository.delete(entity);
        return true;
    }

    @Override
    public List<PageDto> getAll(Long orgId) {
        return pageRepository.getAllAnnouncementByOrgId(orgId).stream()
                .map(x->{
                    var entity=   new PageDto();
                    entity.setId(x.getId());
                    entity.setTitle(x.getTitle());
                    entity.setContent(x.getContent());
                    entity.setOrganizationId(x.getOrganization().getId());
                    return entity;
                }).collect(Collectors.toList());
    }
}
