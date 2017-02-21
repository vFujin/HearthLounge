import React, { Component } from 'react';
export class Overview extends Component {
  render() {
    return (
        <div className={`overview ${this.props.topbarActiveTabUrl === 'overview' && 'active'}-view`}>
          <img src="" alt={this.props.expansion}/>
        </div>
    );
  }
}