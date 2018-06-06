import React, { Component } from 'react';
import './HomePage.css';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  handleButton() {
    this.setState({
      fireRedirect: true
    })
  }

  render() {
    return(
      <div className="HomePage">
        <button onClick={(e) => this.handleButton()}>See Posts</button>
        {this.state.fireRedirect ? <Redirect to="/Posts" /> : ''}
      </div>
    );
  }
};

export default HomePage;
