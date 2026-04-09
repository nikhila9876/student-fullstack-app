package com.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.student.entity.User;
import com.student.repository.UserRepository;
import com.student.util.JwtUtil;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User u = repo.findByUsernameAndPassword(
                user.getUsername(), user.getPassword());

        if(u != null){
            return jwtUtil.generateToken(u.getUsername());
        }

        return "Invalid Credentials";
    }
}