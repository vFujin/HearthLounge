import React, { Component } from 'react';
export class Preorder extends Component {
  render() {
    return (
        <div className={`preorder ${this.props.topbarActiveTabUrl === 'preorder' && 'active'}-view`}>
          preorder
        </div>
    );
  }
}