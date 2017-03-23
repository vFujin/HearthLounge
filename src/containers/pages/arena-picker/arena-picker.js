import React, { Component } from 'react';
export class ArenaPicker extends Component {
  render() {
      return (
        <div className="container__page arena-picker">
          {this.props.children}
        </div>
      );
  }
}