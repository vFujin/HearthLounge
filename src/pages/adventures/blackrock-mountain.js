import React, { Component } from 'react';
import { adventure_details } from '../../data/adventure-details';
export class AdventureDetails extends Component {
  render() {
    return (
        <div className={`${this.props.onChange}`}>
            {adventure_details.map( (element, index)=>
                <div>{element.cost.description}</div>
            )}
        </div>
    );
  }
}