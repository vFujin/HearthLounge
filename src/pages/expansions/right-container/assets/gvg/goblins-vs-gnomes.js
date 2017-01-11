import React, { Component } from 'react';
import {HearthstoneOnAndroid} from './hs-on-android';
import {SpectatorMode} from './spectator-mode';
export class GoblinsVsGnomes extends Component {
  render() {
    return (
        <div>
          <SpectatorMode selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <HearthstoneOnAndroid selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
        </div>
    );
  }
}