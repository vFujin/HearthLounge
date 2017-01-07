import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureCost extends Component {
  render() {
    return (
        <div className="adventure-cost">
          {adventure_details.map( (element, index)=>
              <div key={index}>{element.cost.description}</div>
          )}
        </div>
    );
  }
}