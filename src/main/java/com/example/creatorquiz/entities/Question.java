package com.example.creatorquiz.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String question_body;
    private int points;
    private String type;

    @OneToMany(cascade = {CascadeType.ALL})
    private List<Choice> choices;

    public Question(int id, String question_body, int points, String type ) {
        this.id = id;
        this.question_body = question_body;
        this.points = points;
        this.type = type;
    }

}
