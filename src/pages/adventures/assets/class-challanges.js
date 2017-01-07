import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureClassChallanges extends Component {
  render() {
    return (
        <div>
          {adventure_details.map((element, index)=>
              <ul key={index}>{element.class_challanges.map(element=>
                  <li key={element.class}>{element.class}</li>
              )}</ul>
          )}
        </div>
    );
  }
}