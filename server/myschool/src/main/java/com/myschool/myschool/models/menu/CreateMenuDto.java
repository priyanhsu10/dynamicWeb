package com.myschool.myschool.models.menu;

import com.myschool.myschool.models.MenuDto;
import com.myschool.myschool.models.MenuItemDto;
import com.myschool.myschool.models.OrganizationDto;
import com.myschool.myschool.models.PageDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateMenuDto {

    private Long id;
    private String title;
    private String description;
    private boolean isRoot; //if menu is root a and don't have child then page id ir quick link id applied
    private Long pageId;
    private Long parentId; //if not root then parent id required
    private Long linkId;
    private Long organizationId;
}
