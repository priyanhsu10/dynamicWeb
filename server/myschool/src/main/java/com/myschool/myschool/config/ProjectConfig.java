package com.myschool.myschool.config;

import com.myschool.myschool.security.filters.TokenAuthFilter;
import com.myschool.myschool.security.providers.TokenAuthProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
public class ProjectConfig  extends WebSecurityConfigurerAdapter {


@Autowired
private TokenAuthProvider tokenAuthProvider;
    @Bean
    public PasswordEncoder passwordEncoder(){
        return  new BCryptPasswordEncoder();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.addFilterAt(tokenAuthFilter(), BasicAuthenticationFilter.class);
       http.csrf().disable()
               .authorizeHttpRequests()
               .antMatchers("/api/user/create","/api/user/authenticate","/v3/api-docs/**","/v3/swagger**/**", "/v3/swagger-ui.html", "/v3/swagger-ui/**")
               .permitAll()
               .anyRequest()
               .authenticated();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
      auth.authenticationProvider(tokenAuthProvider);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
@Bean
    public  TokenAuthFilter tokenAuthFilter(){
        return   new TokenAuthFilter();
    }
}
