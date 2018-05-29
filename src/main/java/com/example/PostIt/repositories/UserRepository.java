package com.example.PostIt.repositories;

import com.example.PostIt.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}