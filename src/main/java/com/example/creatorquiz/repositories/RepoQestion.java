package com.example.creatorquiz.repositories;

import com.example.creatorquiz.entities.Question;
import org.springframework.data.repository.CrudRepository;

public interface RepoQestion extends CrudRepository<Question,Integer> {
}
