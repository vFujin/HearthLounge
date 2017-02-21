import React, { Component } from 'react';
export class Overview extends Component {
  render() {
    return (
        <div className={`overview ${this.props.topbarActiveTabUrl === 'overview' && 'active'}-view`}>
          <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/expansions/${this.props.expansion}.jpg`} alt={this.props.expansion}/>
        </div>
    );
  }
}