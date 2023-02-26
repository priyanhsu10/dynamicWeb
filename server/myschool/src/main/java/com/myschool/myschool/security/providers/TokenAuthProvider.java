package com.myschool.myschool.security.providers;

import com.myschool.myschool.models.UserDto;
import com.myschool.myschool.security.authentications.TokenAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Arrays;
@Component
public class TokenAuthProvider implements AuthenticationProvider {
    @Autowired
    JWTTokenManager jwtTokenManager;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        var token = authentication.getName();
        var claim = jwtTokenManager.validateToken(token);
        UserDto user = new UserDto();
        user.setEmail(claim.get("email").toString());
        user.setUsername(claim.get("userName").toString());
        user.setOrganizationId(Long.valueOf(claim.get("orgId").toString()));
        String role = claim.get("ROLE").toString();
        TokenAuthentication auth = new TokenAuthentication(token, null, Arrays.asList(new SimpleGrantedAuthority(role)));
        auth.setUserDto(user);
        return auth;

}

    @Override
    public boolean supports(Class<?> authentication) {
        return TokenAuthentication.class.equals(authentication);
    }
}
