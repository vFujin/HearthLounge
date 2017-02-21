import React, { Component } from 'react';
export class AdventureOverview extends Component {
  render() {
    return (
        <div className={`overview ${this.props.details === 'overview' && 'active'}-view`}>
          <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${this.props.adventure}.jpg`} alt={this.props.adventure}/>
        </div>
    );
  }
}