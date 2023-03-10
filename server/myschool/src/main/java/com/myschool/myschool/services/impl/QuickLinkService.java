package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.entities.Page;
import com.myschool.myschool.entities.QuickLink;
import com.myschool.myschool.models.PageDto;
import com.myschool.myschool.models.QuickLinkDto;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.repositories.IQuickLinkRepository;
import com.myschool.myschool.services.Interfaces.IQuickLinkService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuickLinkService implements IQuickLinkService {
    private  final IQuickLinkRepository quickLinkRepository;
    private  final IOrganizationRepository organizationRepository;
    @Override
    @Transactional
    public QuickLinkDto create(QuickLinkDto linkDto) {

        QuickLink entity = new QuickLink();
        entity.setTitle(linkDto.getTitle());
        entity.setLink(linkDto.getLink());
        Organization org = organizationRepository.getReferenceById(linkDto.getOrganizationId());
        entity.setOrganization(org);
        quickLinkRepository.save(entity);
        return QuickLinkDto.builder().id(entity.getId()).title(entity.getTitle()).link(entity.getLink())
                .organizationId(entity.getOrganization().getId()).build();

    }

    @Override
    public QuickLinkDto update(QuickLinkDto linkDto) {
        QuickLink entity = quickLinkRepository.findById(linkDto.getId()).orElseThrow(() -> new RuntimeException("Page not found"));
        entity.setTitle(linkDto.getTitle());
        entity.setLink(linkDto.getLink());
        quickLinkRepository.save(entity);
        return QuickLinkDto.builder().id(entity.getId()).title(entity.getTitle())
                .link(entity.getLink())
                .organizationId(entity.getOrganization().getId()).build();
    }
    @Transactional

    @Override
    public void delete(Long id) {
        QuickLink entity = quickLinkRepository.findById(id).orElseThrow(() -> new RuntimeException("Page not found"));
        quickLinkRepository.delete(entity);
    }

    @Override
    public List<QuickLinkDto> getAll(Long orgId) {
        return quickLinkRepository.getAllLinksByOrgId(orgId).stream()
                .map(x->{
                    var entity=   new QuickLinkDto();
                    entity.setId(x.getId());
                    entity.setTitle(x.getTitle());
                    entity.setLink(x.getLink());
                    entity.setOrganizationId(x.getOrganization().getId());
                    return entity;
                }).collect(Collectors.toList());
    }
}
