package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.OrganizationDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;
import com.myschool.myschool.models.org.CreateOrgRequest;

import java.util.List;

public interface IAnnouncementService {
    AnnouncementDto create(CreateAnnouncementRequest createAnnouncementRequest);

    AnnouncementDto update(UpdateAnnouncementRequest updateAnnouncementRequest);
    boolean delete(long announcementId);

    List<AnnouncementDto> getAll(Long orgId);

}
