package com.example.todolistapp.mapper;

import com.example.todolistapp.dto.TaskDto;
import com.example.todolistapp.entity.Task;

public class TaskMapper {
    //Mapping task entity to task dto
    public static TaskDto mapToTaskDto(Task task){
        return new TaskDto(
                task.getId(),
                task.getMessage()
        );
    }
    //Mapping task dto to task entity
    public static Task mapToTask(TaskDto taskDto)
    {
        return new Task(
                taskDto.getId(),
                taskDto.getMessage()
        );
    }

}
