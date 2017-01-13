import React, { Component } from 'react';
import {expansion_details} from '../../../data/expansion-details';
export class ExpansionOverview extends Component {
  render(){
    return (
        <div className={`about-extension ${this.props.expansionOverview}`}>
          {expansion_details.map((element, index)=>
              <div className={`${this.props.selectedExpansionClass === element.expansion && 'active'}-view`} key={index}>
                <img src={element.img} alt={`${element.expansion}'s pic`}/>
                <p>{element.desc}</p>
              </div>
          )}
        </div>
    )
  }
}