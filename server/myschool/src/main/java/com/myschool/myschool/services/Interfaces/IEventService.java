package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.EventDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;

import java.util.List;

public interface IEventService {
    EventDto create(EventDto createEvent);

    EventDto update(EventDto updateEvent);
    boolean delete(long eventId);

    List<EventDto> getAll(Long orgId);
}
