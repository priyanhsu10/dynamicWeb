package com.myschool.myschool.models.users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class LoginRequest {
    private  long orgId;
    private String userName;
    private String password;
}
