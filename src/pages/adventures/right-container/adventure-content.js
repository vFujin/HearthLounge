import React, { Component } from 'react';
import {AdventureDetails} from './adventure_details';
export class AdventureContent extends Component {
  render(){
    return (
      <div className={`adventure-content ${this.props.sidebarActiveTab} ${this.props.details}`}>
        <AdventureDetails onTopbarTabChange={this.props.details} adventure={this.props.adventure} details={this.props.topbarActiveTab}/>
      </div>
    )
  }
}