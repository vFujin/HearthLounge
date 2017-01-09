import React, { Component } from 'react';
import {adventure_details} from '../../../data/adventure-details';
export class AdventureOverview extends Component {
  render(){
    return (
        <div className={`about-adventure ${this.props.adventureOverview}`}>
          {adventure_details.map((element, index)=>
          <div className={`${this.props.sidebarActiveTab === element.adventure && 'active'}-view`} key={index}>
            <img src={element.img} alt={`${element.img}'s pic`}/>
            <p>{element.singular_adventure_name} jest przygodą posiadającą {element.structure.wing_amount} skrzydeł, {element.description}. Gracz pokonując skrzydła może dostać {element.cards.card_amount} nowych kart dodanych w tej przygodzie.</p>
          </div>
          )}
        </div>
    )
  }
}