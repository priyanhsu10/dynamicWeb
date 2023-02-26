package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuItemDto {
    private Long id;
    private String title;
    private String translateKey;
    private String DescriptionId;
    private List<MenuItemDto> menuItemList = new ArrayList<>();
    private PageDto page;
    private MenuDto menu;
    private OrganizationDto organization;
}
