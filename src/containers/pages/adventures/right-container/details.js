import React, { Component } from 'react';
import {AdventureOverview} from '../assets/overview';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
import {AdventureBoss} from '../assets/adventure-boss';
import {adventure_detail_tabs, adventure_details} from '../../../../data/adventure-details';
import ValidateURL from '../../../shared-assets/validateUrl';

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

  content(adventure, details, boss){
    return (
      <div className={`extension-content`}>
        {this.activeDetailsContent(adventure, details, boss)}
      </div>
    )
  }

  validateUrlProps(args){
    const {adventure, details, boss} = this.props.params;
    let details_path = adventure_detail_tabs.map(x => x.url).includes(details);
    let wing_path = adventure_details.filter(x=>x.adventure === adventure).map(x=>x.bosses.details)[0].map(x=>x.url).includes(details);

    switch(args){
      case 'condition': return (details_path || wing_path);
      case 'content': return this.content(adventure, details, boss);
      default: return null;
    }
  }

  render(){
    return <ValidateURL condition={this.validateUrlProps('condition')}
                        content={this.validateUrlProps('content')}
                        page="adventure detail"
                        redirect={`adventures/${this.props.params.adventure}`}/>
  }
}