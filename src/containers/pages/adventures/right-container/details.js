import React, { Component } from 'react';
import {AdventureOverview} from '../assets/overview';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
import {AdventureBoss} from '../assets/adventure-boss';

export class AdventureDetails extends Component {
  activeDetailsContent(adventureUrl, detailsUrl, bossUrl){
    switch(detailsUrl){
      case 'overview':          return <AdventureOverview         adventure={adventureUrl} details={detailsUrl}/>;
      case 'bosses':            return <AdventureBosses           adventure={adventureUrl} details={detailsUrl}/>;
      case 'cards':             return <AdventureCards            adventure={adventureUrl} details={detailsUrl}/>;
      case 'class-challanges':  return <AdventureClassChallanges  adventure={adventureUrl} details={detailsUrl}/>;
      case 'cost':              return <AdventureCost             adventure={adventureUrl} details={detailsUrl}/>;
      case 'structure':         return <AdventureStructure        adventure={adventureUrl} details={detailsUrl}/>;
      case detailsUrl:          return <AdventureBoss             adventure={adventureUrl} details={detailsUrl} boss={bossUrl}/>;
      default:                  return <AdventureOverview         adventure={adventureUrl} details={detailsUrl}/>;

    }
  }

  render(){
    let adventureUrl = this.props.params.adventure;
    let detailsUrl = this.props.params.details;
    let bossUrl = this.props.params.boss;
    return (
      <div className={`extension-content ${this.props.adventure} ${this.props.details} `}>
        {this.activeDetailsContent(adventureUrl, detailsUrl, bossUrl)}
      </div>
    )
  }
}