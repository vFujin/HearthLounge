import React, { Component } from 'react';
import {HearthstoneOnAndroid} from './gvg/hs-on-android';
import {SpectatorMode} from './gvg/spectator-mode';
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