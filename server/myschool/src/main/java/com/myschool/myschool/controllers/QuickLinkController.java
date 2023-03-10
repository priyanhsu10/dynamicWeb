package com.myschool.myschool.controllers;

import com.myschool.myschool.models.QuickLinkDto;
import com.myschool.myschool.services.Interfaces.IQuickLinkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quicklinks")
@RequiredArgsConstructor
public class QuickLinkController {
    private final IQuickLinkService iQuickLinkService;

    @GetMapping("/{orgId}")
    public List<QuickLinkDto> getALl(@PathVariable long orgId) {

        return iQuickLinkService.getAll(orgId);
    }

    @PostMapping()
    public ResponseEntity<QuickLinkDto> create(@RequestBody @Validated QuickLinkDto quickLinkDto) {
        return ResponseEntity.ok(iQuickLinkService.create(quickLinkDto));
    }
    @PutMapping("/{orgId}/{id}")
    public ResponseEntity<QuickLinkDto> update(@PathVariable long orgId, @PathVariable long id, @RequestBody @Validated QuickLinkDto quickLinkDto) {
        quickLinkDto.setId(id);
        quickLinkDto.setOrganizationId(orgId);
        return ResponseEntity.ok(iQuickLinkService.update(quickLinkDto));
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity delete(@PathVariable long id){
        iQuickLinkService.delete(id);
        return  ResponseEntity.ok().build();
    }
}
