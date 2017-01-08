import React, { Component } from 'react';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
export class AdventureContent extends Component {
  render(){
    return (
      <div className={`adventure-content ${this.props.sidebarActiveTab} ${this.props.details} `}>
        <AdventureBosses handleBossClick={this.props.handleBossClick}
                         adventure={this.props.adventure}
                         sidebarActiveTab={this.props.sidebarActiveTab}
                         active={this.props.topbarActiveTabUrl}
                         selectedAdventureUrl={this.props.selectedAdventureUrl}
                         selectedTopbarTab={this.props.selectedTopbarTab}
                         activeTableView={this.props.activeTableView}
                         activeBoss={this.props.activeBoss}
                         activeBossUrl={this.props.activeBossUrl}
                         activeBossImg={this.props.activeBossImg}
                         activeBossView={this.props.activeBossView}/>
        <AdventureCards adventure={this.props.adventure} active={this.props.topbarActiveTabUrl}/>
        <AdventureClassChallanges adventure={this.props.sidebarActiveTab} active={this.props.topbarActiveTabUrl}/>
        <AdventureCost adventure={this.props.sidebarActiveTab} active={this.props.topbarActiveTabUrl}/>
        <AdventureStructure adventure={this.props.sidebarActiveTab} active={this.props.topbarActiveTabUrl}/>
      </div>
    )
  }
}