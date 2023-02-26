package com.myschool.myschool.models.users;

import com.myschool.myschool.models.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResult {
    private boolean isAuthenticated;
    private String token;
    private UserDto userDto;
}
