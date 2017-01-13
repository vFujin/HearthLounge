import React, { Component } from 'react';
import {ExpansionCards}  from './shared-expansion-tabs/cards';
import {Arena}  from './shared-expansion-tabs/arena';
import {Preorder}  from './shared-expansion-tabs/preorder';
import {StandardMode}  from './shared-expansion-tabs/standard-mode';

export class SharedTopbarTabs extends Component {

  render() {
    return (
        <div className={`${this.props.expansion} ${this.props.topbarActiveTab}`}>
          <ExpansionCards expansion={this.props.expansion} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <Arena topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <Preorder topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <StandardMode topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
        </div>
    );
  }
}
