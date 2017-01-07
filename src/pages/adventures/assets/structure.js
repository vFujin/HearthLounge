import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureStructure extends Component {
  render() {
    return (
        <div>
          {adventure_details.map((element, index)=>
              <div key={index}>{element.bosses.structure}</div>
          )}
        </div>
    );
  }
}