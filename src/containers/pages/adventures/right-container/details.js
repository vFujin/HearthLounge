import React, { Component } from 'react';
import {AdventureOverview} from '../assets/overview';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
import {AdventureBoss} from '../assets/adventure-boss';
import NotFound from '../../../shared-assets/not-found';
import {adventure_detail_tabs, adventure_details} from '../../../../data/adventure-details';

export class AdventureDetails extends Component {

  validateUrl() {
    const {adventure, details, boss} = this.props.params;
    let details_path = adventure_detail_tabs.map(x => x.url).includes(details);
    let wing_path = adventure_details.filter(x=>x.adventure === adventure).map(x=>x.bosses.details)[0].map(x=>x.url).includes(details);


    if((details_path || wing_path) !== true){
      return <NotFound page="adventure details" url={`adventures/${adventure}`}/>
    }
    else{
      return (
          <div className={`extension-content ${this.props.adventure} ${this.props.details} `}>
            {this.activeDetailsContent(adventure, details, boss)}
          </div>
      )
    }
  }

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
    return this.validateUrl();
  }
}