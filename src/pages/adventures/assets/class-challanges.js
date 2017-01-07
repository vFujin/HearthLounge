import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureClassChallanges extends Component {
  render() {
    return (
        <div className={`class-challanges ${this.props.active === 'class-challanges' && 'active'}-view`}>
          {adventure_details.map((element, index)=>
              <ul key={index}>{element.class_challanges.map(element=>
                  <li key={element.class}>{element.class}</li>
              )}</ul>
          )}
        </div>
    );
  }
}