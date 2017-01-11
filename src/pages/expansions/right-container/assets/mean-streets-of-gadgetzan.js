import React, { Component } from 'react';
import {JadeGolemMechanic} from './msog/jade-golem-mechanic';
import {MulticlassCards} from './msog/multiclass-cards';
export class MeanStreetsOfGadgetzan extends Component {
  render() {
    return (
        <div>
          <JadeGolemMechanic selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <MulticlassCards selectedExpansionClass={this.props.selectedExpansionClass} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
        </div>
    );
  }
}