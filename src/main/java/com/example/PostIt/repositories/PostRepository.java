package com.example.PostIt.repositories;

import com.example.PostIt.models.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {

}