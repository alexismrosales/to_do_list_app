package com.example.todolistapp.controller;

import com.example.todolistapp.dto.TaskDto;
import com.example.todolistapp.entity.Task;
import com.example.todolistapp.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.json.JSONObject;

import java.util.List;
// Allow requests to all origins
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/tasks")
public class TaskController {
    private TaskService taskService;


    // Build createTask REST API
    // createTask(TaskDto) : use POST method to get the json with the object

    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto)
    {
        TaskDto savedTask = taskService.createTask(taskDto);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }
    // Build getTaskById REST API
    // getTaskById(Long ID) : use GET method to get by url the id of the element
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable("id") Long taskId)
    {
        TaskDto getTask = taskService.getTask(taskId);
        return ResponseEntity.ok(getTask);
    }
    // Build getAllTasks REST API
    @GetMapping()
    public ResponseEntity<List<TaskDto>> getAllTasks()
    {
        List<TaskDto> getAllTasks = taskService.getAllTasks();
        return ResponseEntity.ok(getAllTasks);
    }
    // Build updateTaskById REST API
    @PostMapping("updateMessage/{id}")
    public ResponseEntity<TaskDto> updateTaskById(@PathVariable("id") Long taskId, @RequestBody String message)
    {
        // Given a string in JSON format, you can get the items on it
        JSONObject jsonObject = new JSONObject(message);
        String textMessage = jsonObject.getString("message");

        TaskDto updateTask = taskService.updateTask(taskId, textMessage);
        return ResponseEntity.ok(updateTask);
    }
    // Build updateTaskStatusById REST API
    @PostMapping("updateStatus/{id}")
    public ResponseEntity<TaskDto> updateTaskStatusById(@PathVariable("id") Long taskId, @RequestBody String done)
    {
        JSONObject jsonObject = new JSONObject(done);
        Boolean status = jsonObject.getBoolean("done");
        TaskDto updateTask = taskService.updateTaskStatus(taskId, status);
        return ResponseEntity.ok(updateTask);
    }
    // Build updateTaskById REST API
    @DeleteMapping("{id}")
    public ResponseEntity<TaskDto> deleteTask(@PathVariable("id") Long taskId)
    {
        taskService.deleteTask(taskId);
        return ResponseEntity.noContent().build();
    }

}
