import React, { Component } from 'react';
export class PreExpansionSelect extends Component {
  render() {
    return (
        <div className={`before-extension-pick ${this.props.preSelect}`}>
          <p>&#10094; Wybierz dodatek</p>
        </div>
    )
  }
}