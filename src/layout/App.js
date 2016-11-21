import React, { Component } from 'react';
import '../styles/index.css';
import {Navbar} from './navbar';
import {Footer} from './footer';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}

export default App;
