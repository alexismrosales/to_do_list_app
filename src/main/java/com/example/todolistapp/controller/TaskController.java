package com.example.todolistapp.controller;

import com.example.todolistapp.dto.TaskDto;
import com.example.todolistapp.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/tasks")
public class TaskController {
    private TaskService taskService;

    // Build Add Task REST API
    // POST method
    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto)
    {
        TaskDto savedTask = taskService.createTask(taskDto);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable("id") Long taskId)
    {
        TaskDto taskDto = taskService.getTask(taskId);
        return ResponseEntity.ok(taskDto);
    }

}
