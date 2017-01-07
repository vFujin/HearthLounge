import React, { Component } from 'react';
import {adventure_details} from '../../../data/adventure-details';
export class AdventureBosses extends Component {
  render() {
    return (
        <div className="adventure-bosses">
          {adventure_details.map((element, index)=>
            <div key={index}>{element.bosses.description}</div>
          )}
        </div>
    );
  }
}