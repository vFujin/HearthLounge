import React, { Component } from 'react';
export class Arena extends Component {
  render() {
    return (
        <div className={`arena ${this.props.topbarActiveTabUrl === 'arena' && 'active'}-view`}>
          arena
        </div>
    );
  }
}