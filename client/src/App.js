import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Component Imports
import HomePage from './components/HomePage/HomePage';
import Posts from './components/Posts/Posts';
import NewPost from './components/Posts/NewPost/NewPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-contents">
            <Route exact path="/" component={HomePage} />

            <Route exact path="/Posts" component={Posts} />
            <Route exact path="/NewPost" component={NewPost} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
