import React, { Component } from 'react';
export class ManaCurve extends Component {
  render() {
    return (
      <ul className={`${this.props.prefix}-mana-curve`}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
}