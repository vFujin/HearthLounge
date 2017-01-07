import React, { Component } from 'react';
export class PreAdventureSelect extends Component {
  render() {
    return (
        <div className={`before-adventure-pick ${this.props.preSelect}`}>
          <p>&#10094; Wybierz przygodę</p>
        </div>
    )
  }
}