package com.myschool.myschool.services.Interfaces;

import com.myschool.myschool.models.UserDto;
import com.myschool.myschool.models.users.AuthenticationResult;
import com.myschool.myschool.models.users.CreateUserDto;
import com.myschool.myschool.models.users.LoginRequest;

import java.util.List;

public interface IUserService {

    UserDto create(CreateUserDto userDto);
    AuthenticationResult login(LoginRequest userDto);
    List<UserDto> getByOrgId(long orgId);
 }
