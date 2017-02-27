import React, { Component } from 'react';

export class Decks extends Component {
  render() {
    return (
        <div className="pageContainer decks">
          {this.props.children}
          <div className="wrapper">
            <div className="left-container">
              <div className="sidebar">
                {this.props.sidebar}
              </div>
            </div>
            <div className="right-container">
              <div className="topbar">
                {this.props.topbar}
              </div>
              {this.props.main}
            </div>
          </div>
        </div>
    );
  }
}