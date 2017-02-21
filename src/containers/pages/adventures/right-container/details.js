import React, { Component } from 'react';
import {AdventureOverview} from '../assets/overview';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
import {AdventureBoss} from '../assets/adventure-boss';

export class AdventureDetails extends Component {
  render(){
    let adventureUrl = this.props.params.adventure;
    let detailsUrl = this.props.params.details;
    let bossUrl = this.props.params.boss;
    return (
      <div className={`extension-content ${this.props.sidebarActiveTab} ${this.props.details} `}>
        <AdventureOverview        adventure={adventureUrl} details={detailsUrl}/>
        <AdventureBosses          adventure={adventureUrl} details={detailsUrl}/>
        <AdventureCards           adventure={adventureUrl} details={detailsUrl}/>
        <AdventureClassChallanges adventure={adventureUrl} details={detailsUrl}/>
        <AdventureCost            adventure={adventureUrl} details={detailsUrl}/>
        <AdventureStructure       adventure={adventureUrl} details={detailsUrl}/>
        <AdventureBoss            adventure={adventureUrl} details={detailsUrl} boss={bossUrl}/>
      </div>
    )
  }
}