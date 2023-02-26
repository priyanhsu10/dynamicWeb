package com.myschool.myschool.models.users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UpdateUserDto {
    private Long id;
    private String username;
    private String email;

    private Long organizationId;
}
