package com.myschool.myschool.models.menu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdateMenuDto {

    private Long id;
    private String title;
    private String Description;
        private boolean isRoot; //if menu is root a and don't have child then page id ir quick link id applied
    private Long PageId;
    private Long ParentId; //if not root then parent id required
    private long linkId;
    private Long organizationId;
}
