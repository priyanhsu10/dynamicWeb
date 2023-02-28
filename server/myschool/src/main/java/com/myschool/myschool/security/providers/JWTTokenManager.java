package com.myschool.myschool.security.providers;

import com.myschool.myschool.entities.User;
import com.myschool.myschool.models.UserDto;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JWTTokenManager {

    @Value("${jwt.secret}")
    private String secret;
    @Value("${jwt.jwtExpiryInMilis}")
    private int jwtExpiryInMilis;

    public String generateToken(UserDto userDto) {
        Map<String, Object> claim = new HashMap<>();
        claim.put("userName", userDto.getUsername());
        claim.put("email", userDto.getEmail());
        claim.put("orgId", userDto.getOrganizationId().toString());
        var role = userDto.isAdmin() ? "A" : "U";
        claim.put("ROLE", role);
        Date now = new Date();
        Date expiration = new Date(now.getTime() + jwtExpiryInMilis);
        String token = Jwts.builder()
                .addClaims(claim)
                .setIssuedAt(now)
                .setSubject(userDto.getUsername())
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();

        return token;
    }

    public Claims validateToken(String token) {

        try {

            Claims claims = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            return claims;
        } catch (SignatureException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException ex) {
            throw new BadCredentialsException("INVALID_CREDENTIALS", ex);
        } catch (ExpiredJwtException ex) {
            throw new BadCredentialsException("Token has Expired", ex);
        }
    }
}
