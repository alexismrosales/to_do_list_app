package com.example.todolistapp.entity;

import jakarta.persistence.*;
import lombok.*;

//Adding some parameters to the constructor
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
//Setting table name
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "message")
    private String message;
}
