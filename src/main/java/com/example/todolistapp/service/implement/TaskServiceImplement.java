package com.example.todolistapp.service.implement;

import com.example.todolistapp.dto.TaskDto;
import com.example.todolistapp.entity.Task;
import com.example.todolistapp.exceptions.ResourceNotFoundException;
import com.example.todolistapp.mapper.TaskMapper;
import com.example.todolistapp.repository.TaskRepository;
import com.example.todolistapp.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

// Class selected as a service
@Service
@AllArgsConstructor
public class TaskServiceImplement implements TaskService {
    private TaskRepository taskRepository;
    // createTask(TaskDto task) : this method create a new task and save it in the database
    @Override
    public TaskDto createTask(TaskDto taskDto) {
        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask =taskRepository.save(task);
        return TaskMapper.mapToTaskDto(savedTask);
    }
    // getTask(Long Id) : this method get any task, if it exist
    @Override
    public TaskDto getTask(Long taskId)
    {
        Task task = taskRepository.findById(taskId)
                .orElseThrow( () -> new ResourceNotFoundException("Task "+taskId+" does not exist"));
        return TaskMapper.mapToTaskDto(task);
    }
    // getAllTask() : get all task from our database in a list
    @Override
    public List<TaskDto> getAllTasks()
    {
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream().map((task) -> TaskMapper.mapToTaskDto(task)).collect(Collectors.toList());
    }
    @Override
    // updateTask(Long Id, String Message) : update the task text given an Id
    public TaskDto updateTask(Long taskId, String Message)
    {
        Task task = taskRepository.findById(taskId)
                .orElseThrow( () -> new ResourceNotFoundException("Task "+taskId+" does not exist"));
        task.setMessage(Message);
        taskRepository.save(task);
        return TaskMapper.mapToTaskDto(task);
    }
    // deleteTask(Long Id) : delete the task given an Id
    @Override
    public TaskDto deleteTask(Long taskId) {
       taskRepository.deleteById(taskId);
       return null;
    }
}
