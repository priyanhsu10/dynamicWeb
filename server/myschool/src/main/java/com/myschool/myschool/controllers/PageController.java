package com.myschool.myschool.controllers;

import com.myschool.myschool.models.PageDto;
import com.myschool.myschool.models.PageDto;
import com.myschool.myschool.services.Interfaces.IPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pages")
@RequiredArgsConstructor
public class PageController {
    private  final IPageService pageService;
    @GetMapping("/{orgId}")
    public List<PageDto> get(@PathVariable Long orgId)
    {
        return  pageService.getAll(orgId);
    }

    @PostMapping
    public ResponseEntity<PageDto> create(@RequestBody @Validated PageDto pageDto){
        PageDto organizationDto = pageService.create(pageDto);
        return  ResponseEntity.ok(organizationDto);
    }

    @PutMapping("/{orgId}/{id}")
    public ResponseEntity<PageDto> update(@PathVariable long orgId ,@PathVariable  long id ,@RequestBody @Validated PageDto pageDto){
        pageDto.setId(id);
        pageDto.setOrganizationId(orgId);
        PageDto resultDto = pageService.update(pageDto);
        return  ResponseEntity.ok(resultDto);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> update(@PathVariable  long id){
        Boolean announcementDto = pageService.delete(id);
        return  ResponseEntity.ok(announcementDto);
    }



}
