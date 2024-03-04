package com.example.todolistapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ListController {
    @GetMapping("/List")
    public String Start()
    {
        return "hello world";
    }

}
