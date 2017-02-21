import React, {Component} from 'react';
import {SharedTopbarTabs} from './assets/shared-topbar-tabs'
export class ExpansionDetails extends Component{
  render() {
    return (
        <div className="extension-content">
          <SharedTopbarTabs expansion={this.props.location.pathname.split('/')[2]}
                            details={this.props.location.pathname.split('/')[3]}/>
        </div>
    )
  }
}