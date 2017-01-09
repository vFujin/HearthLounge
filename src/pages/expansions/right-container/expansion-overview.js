import React, { Component } from 'react';
import {expansion_details} from '../../../data/expansion-details';
export class ExpansionOverview extends Component {
  render(){
    return (
        <div className={`about-expansion ${this.props.expansionOverview}`}>
          {expansion_details.map((element, index)=>
              <div className={`${this.props.sidebarActiveTab === element.expansion && 'active'}-view`} key={index}>
                <img src={element.img} alt={`${element.img}'s pic`}/>
                <p>{element.singular_adventure_name} jest dodatkiem posiadającą. Gracz pokonując skrzydła może dostać x nowych kart dodanych w tej przygodzie.</p>
              </div>
          )}
        </div>
    )
  }
}