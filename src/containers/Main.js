import React, { Component } from 'react';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
export class Main extends Component {
  render() {
    return (
        <div>
          <Navbar />
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}
export default Main;