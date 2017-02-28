import React, { Component } from 'react';

export class Decks extends Component {
  render() {
    const {sidebar, topbar, main} = this.props;
    return (
      <div className="pageContainer decks">
        {this.props.children}
          <div className="left-container">
            <div className="sidebar">
              {sidebar}
            </div>
          </div>
          <div className="right-container">
            <div className="topbar topbar__left topbar__right">
              {topbar}
            </div>
            {main}
          </div>
        </div>
    );
  }
}