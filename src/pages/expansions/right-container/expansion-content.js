import React, { Component } from 'react';
import {ExpansionCards}  from './assets/cards';
import {Arena}  from './assets/arena';
import {Preorder}  from './assets/preorder';
import {StandardMode}  from './assets/standard-mode';

import {SpectatorMode} from './assets/gvg/spectator-mode';
import {HearthstoneOnAndroid} from './assets/gvg/hs-on-android';
export class ExpansionContent extends Component {

  render() {
    return (
        <div className={`extension-content ${this.props.expansion} ${this.props.topbarActiveTab}`}>
          <ExpansionCards expansion={this.props.expansion} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <Arena topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <Preorder topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <StandardMode topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <SpectatorMode topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <HearthstoneOnAndroid topbarActiveTabUrl={this.props.topbarActiveTabUrl} />
        </div>
    );
  }
}
