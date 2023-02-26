package com.myschool.myschool.models.org;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CreateOrgRequest {
    private String name;
    private String logo;
    private String address;
}

