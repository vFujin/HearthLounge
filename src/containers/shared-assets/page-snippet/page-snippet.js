import React, { Component } from 'react';
export class PageSnippet extends Component {
  render() {
    return (
        <div className={`pageContainer ${this.props.page}`}>
          {this.props.children}
          <div className="left-container">
            <div className="sidebar">
              <h3 className="filter-header">{this.props.sidebar_header}</h3>
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
    );
  }
}