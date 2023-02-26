package com.myschool.myschool.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/home")
public class HomeController {
    @GetMapping
    public  String get(HttpServletRequest httpServletRequest){
        return  LocalDateTime.now().toString() + " "+ httpServletRequest.getRequestURI();

    }



}
