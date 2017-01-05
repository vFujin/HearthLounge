import React, { Component } from 'react';
import { adventure_details } from '../../data/adventure-details';
import {AdventureCards} from './assets/cards';
export class AdventureDetails extends Component {
  render() {
    return (
        <div className={`${this.props.adventure}`}>
            {adventure_details.map( (element, index)=>
                <div key={index}>{element.cost.description}</div>
            )}
          <AdventureCards adventure={this.props.adventure} />
        </div>

    );
  }
}