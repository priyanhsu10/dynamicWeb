package com.myschool.myschool.controllers;

import com.myschool.myschool.models.UserDto;
import com.myschool.myschool.models.users.AuthenticationResult;
import com.myschool.myschool.models.users.CreateUserDto;
import com.myschool.myschool.models.users.LoginRequest;
import com.myschool.myschool.services.Interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final IUserService userService;

    @GetMapping("/{orgId}")
    public List<UserDto> get(@PathVariable Long orgId) {
      return userService.getByOrgId(orgId);

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResult> login(@RequestBody LoginRequest loginRequest) {

      return   ResponseEntity.ok(userService.login(loginRequest));

    }

    @PostMapping("/create")
    public ResponseEntity<UserDto> create(@RequestBody CreateUserDto createUserDto) {

       return ResponseEntity.ok(userService.create(createUserDto));

    }


}

