package com.example.PostIt.controllers;

import com.example.PostIt.models.Post;
import com.example.PostIt.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/posts")
    public Iterable<Post> findAllPosts() { return postRepository.findAll(); }
    @GetMapping("/posts/{postId}")
    public Optional<Post> findPostById(@PathVariable Long postId) { return postRepository.findById(postId); }

    @DeleteMapping("/posts/{postId}")
    public HttpStatus deletePostById(@PathVariable Long postId) {
        postRepository.deleteById(postId);
        return HttpStatus.OK;
    }
    @PostMapping("/posts")
    public Post createNewPost(@RequestBody Post newPost) { return postRepository.save(newPost); }

    @PatchMapping("/posts/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody Post postRequest) {

        Post postFromDb = postRepository.findById(postId).get();

        postFromDb.setContent(postRequest.getContent());

        return postRepository.save(postFromDb);
    }

}