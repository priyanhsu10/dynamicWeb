package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.PageDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;

import java.util.List;

public interface IPageService {
    PageDto create(PageDto createAnnouncementRequest);

    PageDto update(PageDto updateAnnouncementRequest);
    boolean delete(long pageId);

    List<PageDto> getAll(Long orgId);
}
