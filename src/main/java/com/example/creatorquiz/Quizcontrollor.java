package com.example.creatorquiz;


import com.example.creatorquiz.entities.Quiz;
import com.example.creatorquiz.repositories.Repoquiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class Quizcontrollor {


    @Autowired
    Repoquiz repoQuiz;

    @GetMapping(value = "/getall")
    public List<Quiz> getAll(){
        return (List<Quiz>) repoQuiz.findAll();
    }

    @PostMapping(value = "/upload")
    public String uploadquiz(@RequestBody Quiz quiz){
        repoQuiz.save(quiz);
        return "Successfully uploaded";
    }


}