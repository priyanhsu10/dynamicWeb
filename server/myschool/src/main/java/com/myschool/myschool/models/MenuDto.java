package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuDto {

    private Long id;
    private String title;
    private String description;
    private boolean isRoot;
    private Long parentId;
    private OrganizationDto organization;
    private List<MenuItemDto> Items;
    private Long pageId;
}

