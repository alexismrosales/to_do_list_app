package com.example.todolistapp.service;

import com.example.todolistapp.dto.TaskDto;

import java.util.List;

// Methods for the API Rest
public interface TaskService {
    TaskDto createTask(TaskDto taskDto);

    TaskDto getTask(Long taskId);

    List<TaskDto> getAllTasks();

    TaskDto updateTask(Long taskId, String Message);

    // updateTaskStatus(Long Id, Boolean Done) : update task status given and Id
    TaskDto updateTaskStatus(Long taskId, Boolean Done);

    TaskDto deleteTask(Long taskId);

}
