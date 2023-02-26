package com.myschool.myschool.models.users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CreateUserDto {
    private String username;
    private String password;
    private String email;

    private Long organizationId;
}

