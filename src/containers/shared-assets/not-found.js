import React, { Component } from 'react';
export class NotFound extends Component {
  render() {
    return (
        <div className={`cost inner-container ${this.props.details === '*' && 'active'}-view `}>
          <p>Nothing here</p>
        </div>
    );
  }
}