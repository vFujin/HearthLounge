import React, { Component } from 'react';
import {ExpansionCards}  from './assets/cards';
export class ExpansionContent extends Component {

  render() {
    return (
        <div className={`extension-content ${this.props.expansion} ${this.props.topbarActiveTabUrl}`}>
          <ExpansionCards expansion={this.props.expansion} topbarActiveTabUrl={this.props.topbarActiveTabUrl}/>
        </div>
    );
  }
}
