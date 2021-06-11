package com.example.creatorquiz.entities;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Choice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String choice_body;
    private Boolean Iscorrect;

    public Choice(int id, String choice_body, Boolean Iscorrect) {
        this.id = id;
        this.choice_body = choice_body;
        this.Iscorrect = Iscorrect;
    }
}
