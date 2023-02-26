package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PageDto {
    private Long id;
    private String title;
    private String content;
    private long organizationId;
}
