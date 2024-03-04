package com.example.todolistapp.repository;

import com.example.todolistapp.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
                                                    //Constructor , ID size
public interface TaskRepository extends JpaRepository<Task,Long> {
}
