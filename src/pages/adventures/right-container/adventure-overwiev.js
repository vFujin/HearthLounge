import React, { Component } from 'react';
import {adventure_details} from '../../../data/adventure-details';
export class AdventureOverview extends Component {
  render(){
    return (
        <div className={`about-adventure ${this.props.adventureOverview}`}>
          {adventure_details.map((element, index)=>
          <div key={index}>
            <img src={element.img} alt={`${element.img}'s pic`}/>
            <p>{element.description}</p>
          </div>
          )}
        </div>
    )
  }
}