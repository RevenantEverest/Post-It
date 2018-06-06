import React, { Component } from 'react';
import './NewPost.css';
import { Redirect } from 'react-router-dom';

import services from '../../../services/apiServices';

class NewPost extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      content: this.state.content
    }
    services.newPost(data)
      .then(results => {
        console.log("Success =>", results);
        this.setState({
          fireRedirect: true
        })
      })
      .catch(err => {
        console.log("Failed at New Post => ", err);
      })
  }

  render() {
    return(
      <div className="NewPost">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="content" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.state.fireRedirect ? <Redirect to="/Posts" /> : ''}
      </div>
    );
  }
};

export default NewPost;
