package com.student.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class RoleController {

    @GetMapping("/admin/add")
    public String add(){
        return "Admin Add Success";
    }

    @GetMapping("/admin/delete")
    public String delete(){
        return "Admin Delete Success";
    }

    @GetMapping("/employee/profile")
    public String profile(){
        return "Employee Profile";
    }
}