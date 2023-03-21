package com.myschool.myschool.controllers;

import com.myschool.myschool.entities.MenuItem;
import com.myschool.myschool.models.menu.CreateMenuDto;
import com.myschool.myschool.models.menu.UpdateMenuDto;
import com.myschool.myschool.services.Interfaces.IMenuService;
import jdk.jshell.Snippet;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
public class MenuController {
    private final IMenuService menuService;

    @GetMapping("/{orgId}")
    public ResponseEntity<List<MenuItem>> get(@PathVariable long orgId) {
        return ResponseEntity.ok(menuService.getAllByOrgId(orgId));

    }

    @PostMapping
        public ResponseEntity create(@RequestBody CreateMenuDto createMenuDto) {
        menuService.create(createMenuDto);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }
    @PostMapping("/{orgId}/{id}")
    public ResponseEntity update(@PathVariable long orgId, @PathVariable long id, @RequestBody UpdateMenuDto updateMenuDto) {
        updateMenuDto.setOrganizationId(orgId);
        updateMenuDto.setId(id);
        menuService.update(updateMenuDto);
        return ResponseEntity.ok().build();
    }


}
