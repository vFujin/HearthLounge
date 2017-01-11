import React, { Component } from 'react';
export class MeanStreetsOfGadgetzan extends Component {
  render() {
    return (
        <div>
          <ExpansionCards expansion={this.props.expansion} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
          <Arena topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
        </div>
    );
  }
}