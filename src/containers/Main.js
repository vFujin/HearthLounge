import React, { Component } from 'react';
import {Navbar} from './layout/navbar';
import {Footer} from './layout/footer';
export class Main extends Component {
  render() {
    let url = this.props.location.pathname;
    return (
        <div id="container">
          <Navbar url={url}/>
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}
export default Main;