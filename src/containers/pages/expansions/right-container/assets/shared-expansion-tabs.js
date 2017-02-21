import React, { Component } from 'react';
import {Overview}  from './shared-expansion-tabs/overview';
import {ExpansionCards}  from './shared-expansion-tabs/cards';
import {Arena}  from './shared-expansion-tabs/arena';
import {Preorder}  from './shared-expansion-tabs/preorder';
import {StandardMode}  from './shared-expansion-tabs/standard-mode';


export class SharedTopbarTabs extends Component {

  render() {
    return (
        <div className={`${this.props.expansion} ${this.props.details}`}>
          <Overview expansion={this.props.expansion} topbarActiveTabUrl={this.props.details}/>
          <ExpansionCards expansion={this.props.expansion} details={this.props.details}/>
          <Arena topbarActiveTabUrl={this.props.details}/>
          <Preorder topbarActiveTabUrl={this.props.details}/>
          <StandardMode topbarActiveTabUrl={this.props.details}/>
        </div>
    );
  }
}
