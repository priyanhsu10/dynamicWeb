package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrganizationDto {

    private Long id;
    private String name;
    private String logo;
    private String address;


}
