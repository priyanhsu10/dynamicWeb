package com.myschool.myschool.models.org;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UpdateOrgRequest {
    private Long id;
    private String name;
    private String logo;
    private String address;
}
