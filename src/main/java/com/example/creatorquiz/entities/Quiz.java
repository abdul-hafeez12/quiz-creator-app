package com.example.creatorquiz.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Data
@Entity
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private int points;
    private int time_allowed;
    @Temporal(TemporalType.DATE)
    private Date deadline;

    @OneToMany(cascade = {CascadeType.ALL})
    private List<Question> questions;

    public Quiz(int id, String title, int points, int time_allowed, Date deadline) {
        this.id = id;
        this.title = title;
        this.points = points;
        this.time_allowed = time_allowed;
        this.deadline = deadline;
    }

}
