import React, { Component } from 'react';
import {AdventureCards} from './assets/cards';
export class AdventureDetails extends Component {
  render() {
    return (
        <div className={`${this.props.selectedAdventure}`}>

          <AdventureCards adventure={this.props.selectedAdventure} />
        </div>

    );
  }
}