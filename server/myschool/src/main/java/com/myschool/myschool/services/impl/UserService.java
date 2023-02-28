package com.myschool.myschool.services.impl;

import com.myschool.myschool.entities.Organization;
import com.myschool.myschool.entities.User;
import com.myschool.myschool.models.UserDto;
import com.myschool.myschool.models.users.AuthenticationResult;
import com.myschool.myschool.models.users.CreateUserDto;
import com.myschool.myschool.models.users.LoginRequest;
import com.myschool.myschool.repositories.IOrganizationRepository;
import com.myschool.myschool.repositories.IUserRepository;
import com.myschool.myschool.security.providers.JWTTokenManager;
import com.myschool.myschool.services.Interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final IUserRepository userRepository;
    private final PasswordEncoder encoder;
    private final IOrganizationRepository organizationRepository;
    private final JWTTokenManager jwtTokenManager;

    @Override
    public UserDto create(CreateUserDto userDto) {
        if (userRepository.findByUserNameAndOrgId(userDto.getUsername(), userDto.getOrganizationId()).isPresent()) {
            throw new RuntimeException("User already exist");
        }
        User u = new User();
        u.setPassword(encoder.encode(userDto.getPassword()));
        u.setAdmin(userDto.isAdmin());
        u.setUsername(userDto.getUsername());
        Organization org = organizationRepository.getReferenceById(userDto.getOrganizationId());
        u.setOrganization(org);
        u.setEmail(userDto.getEmail());
        userRepository.save(u);
        return UserDto.builder().id(u.getId()).email(u.getEmail()).username(u.getUsername()).organizationId(u.getOrganization().getId())
                .isAdmin(u.isAdmin()).build();
    }

    @Override
    public AuthenticationResult login(LoginRequest userDto) {
        User u = userRepository.findByUserNameAndOrgId(userDto.getUserName(), userDto.getOrgId()).orElseThrow(() -> new RuntimeException("User Not Exist"));
        if (encoder.matches(userDto.getPassword(), u.getPassword())) {
            UserDto dto = UserDto.builder().isAdmin(u.isAdmin()).id(u.getId()).email(u.getEmail()).username(u.getUsername()).organizationId(u.getOrganization().getId())
                    .build();
            String token = jwtTokenManager.generateToken(dto);

            return new AuthenticationResult(true, token, dto);
        }
        throw new RuntimeException("Invalid Password");
    }

    @Override
    public List<UserDto> getByOrgId(long orgId) {
        return userRepository.getAllByOrgId(orgId).stream().map(u->UserDto.builder().isAdmin(u.isAdmin()).id(u.getId()).email(u.getEmail()).username(u.getUsername()).organizationId(u.getOrganization().getId())
                .build()).collect(Collectors.toList());
    }
}
