import React, { Component } from 'react';

export class Decks extends Component {
  render() {
    const {sidebar, topbar, main} = this.props;
    return (
      <div className="container__page decks">
        {this.props.children}
          <div className="container__page--inner container__page--left">
            <div className="sidebar">
              {sidebar}
            </div>
          </div>
          <div className="container__page--inner container__page--right">
            <div className="topbar">
              {topbar}
            </div>
            <div className="content">
              {main}
            </div>
          </div>
        </div>
    );
  }
}