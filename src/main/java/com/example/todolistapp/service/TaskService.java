package com.example.todolistapp.service;

import com.example.todolistapp.dto.TaskDto;

// Methods for the API Rest
public interface TaskService {
    TaskDto createTask(TaskDto taskDto);

    TaskDto getTask(Long taskId);
    
}
