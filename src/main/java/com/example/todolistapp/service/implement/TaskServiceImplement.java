package com.example.todolistapp.service.implement;

import com.example.todolistapp.dto.TaskDto;
import com.example.todolistapp.entity.Task;
import com.example.todolistapp.exceptions.ResourceNotFoundException;
import com.example.todolistapp.mapper.TaskMapper;
import com.example.todolistapp.repository.TaskRepository;
import com.example.todolistapp.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
// We select this class as a service
@Service
@AllArgsConstructor
public class TaskServiceImplement implements TaskService {
    private TaskRepository taskRepository;
    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask =taskRepository.save(task);
        return TaskMapper.mapToTaskDto(savedTask);
    }
    @Override
    public TaskDto getTask(Long taskId)
    {
        Task task = taskRepository.findById(taskId)
                .orElseThrow( () -> new ResourceNotFoundException("Task "+taskId+" does not exist"));
        return TaskMapper.mapToTaskDto(task);
    }
}
