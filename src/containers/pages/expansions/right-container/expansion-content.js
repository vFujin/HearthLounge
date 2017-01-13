import React, { Component } from 'react';
import {SharedTopbarTabs} from './assets/shared-expansion-tabs';
import {GoblinsVsGnomes} from './assets/goblins-vs-gnomes';
import {MeanStreetsOfGadgetzan} from './assets/mean-streets-of-gadgetzan';
export class ExpansionContent extends Component {

  render() {
    return (
        <div className={`extension-content ${this.props.expansion} ${this.props.topbarActiveTab}`}>
          <SharedTopbarTabs expansion={this.props.expansion} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <GoblinsVsGnomes selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl} />
          <MeanStreetsOfGadgetzan selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl} />
        </div>
    );
  }
}
