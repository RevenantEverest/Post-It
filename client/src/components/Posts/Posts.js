import React, { Component } from 'react';
import './Posts.css';
import { Redirect } from 'react-router-dom';

import services from '../../services/apiServices';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataRecieved: false,
      fireRedirect: false
    }
  }

  componentDidMount() {
    services.getPosts()
      .then(results => {
        this.setState({
          apiData: results.data,
          apiDataRecieved: true
        })
      })
      .catch(err => {
        console.log("Failed at Get Posts => ", err);
      })
  }

  handleNewPost() {
    this.setState({
      fireRedirect: true
    })
  }

  handleDelete(id) {
    let data = {
      id: id
    }
    services.deletePost(data)
      .then(results => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log("Failed at Delete Post => ", err);
      })
  }

  renderPosts() {
    let posts = this.state.apiData.map((el, idx) => {
      return(
        <div key={idx}>
          <h1 className="Posts-posts">{el.content}</h1>
          {console.log(el.id)}
          <button onClick={(e) => this.handleDelete(el.id)}>Delete</button>
        </div>
      );
    })

    return(
      <div className="Posts-content-container">
        {posts}
      </div>
    );
  }

  render() {
    return(
      <div className="Posts">
        {this.state.apiDataRecieved ? this.renderPosts() : <div className="loading" />}
        <button onClick={(e) => this.handleNewPost()}>Create Post</button>
        {this.state.fireRedirect ? <Redirect to="/NewPost" /> : ''}
      </div>
    );
  }
};

export default Posts;
