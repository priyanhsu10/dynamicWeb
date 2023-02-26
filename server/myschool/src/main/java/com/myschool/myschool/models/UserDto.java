package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class UserDto {
    //check validation for entity
    private Long id;
    private String username;
    private String email;
    private boolean isAdmin;

    private Long organizationId;
}
