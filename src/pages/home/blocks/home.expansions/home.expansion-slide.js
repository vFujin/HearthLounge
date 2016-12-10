import React, { Component } from 'react';
export class ExpansionSlide extends Component {
  render() {
    return (
        <li id={this.props.index}>
          <img src={require(`../../../../images/home.expansion-slider/${this.props.title}.jpg`)} alt="" />
        </li>
    );
  }
}