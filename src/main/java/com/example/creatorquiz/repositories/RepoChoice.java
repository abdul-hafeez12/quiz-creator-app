package com.example.creatorquiz.repositories;

import com.example.creatorquiz.entities.Choice;
import org.springframework.data.repository.CrudRepository;

public interface RepoChoice  extends CrudRepository<Choice,Integer> {
}
