package com.myschool.myschool.controllers;

import com.myschool.myschool.models.AnnouncementDto;
import com.myschool.myschool.models.EventDto;
import com.myschool.myschool.models.annoucement.CreateAnnouncementRequest;
import com.myschool.myschool.models.annoucement.UpdateAnnouncementRequest;
import com.myschool.myschool.services.Interfaces.IEventService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
public class EventController {
    private  final IEventService eventService;
    @GetMapping("/{orgId}")
    public List<EventDto> get(@PathVariable Long orgId)
    {
        return  eventService.getAll(orgId);
    }

    @PostMapping
    public ResponseEntity<EventDto> create(@RequestBody @Validated EventDto announcementRequest){
        EventDto organizationDto = eventService.create(announcementRequest);
        return  ResponseEntity.ok(organizationDto);
    }

    @PutMapping("/{orgId}/{id}")
    public ResponseEntity<EventDto> update(@PathVariable long orgId ,@PathVariable  long id ,@RequestBody @Validated EventDto updateAnnouncementRequest){
        updateAnnouncementRequest.setId(id);
        updateAnnouncementRequest.setOrganizationId(orgId);
        EventDto announcementDto = eventService.update(updateAnnouncementRequest);
        return  ResponseEntity.ok(announcementDto);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> update(@PathVariable  long id){
        Boolean announcementDto = eventService.delete(id);
        return  ResponseEntity.ok(announcementDto);
    }


}
