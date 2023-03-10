package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.QuickLinkDto;

import java.util.List;

public interface IQuickLinkService {

    QuickLinkDto create(QuickLinkDto linkDto);
    QuickLinkDto update(QuickLinkDto linkDto);
    void  delete(Long id);
    List<QuickLinkDto> getAll(Long orgId);
}
