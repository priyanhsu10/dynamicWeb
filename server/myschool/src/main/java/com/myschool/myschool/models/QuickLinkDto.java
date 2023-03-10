package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QuickLinkDto {
    private Long id;
    private String title;
    private String link;
    private long organizationId;

}
