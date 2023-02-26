package com.myschool.myschool.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {
    //check validation for entity
    private Long id;
    private String username;
    private String password;
    private String email;

    private Long organizationId;
}
