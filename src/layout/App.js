import React, { Component } from 'react';
import '../styles/index.css';
import {Navbar} from '../pages/navbar';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          {this.props.children}
        </div>

    );
  }
}

export default App;
