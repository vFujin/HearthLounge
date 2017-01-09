import React, { Component } from 'react';
export class StandardMode extends Component {
  render() {
    return (
        <div className={`standard-mode ${this.props.topbarActiveTabUrl === 'cards' && 'active'}-view`}>
            StandardMode
        </div>
    );
  }
}