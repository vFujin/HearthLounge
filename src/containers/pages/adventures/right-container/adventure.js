import React, {Component} from 'react';
import {Topbar} from './topbar';
export class Adventure extends Component{
  render() {
    let adventureUrl = this.props.params.adventure;
    let detailsUrl   = this.props.params.details;
    let bossUrl      = this.props.params.boss;
    return (
        <div className="content">
          <Topbar adventure={adventureUrl}
                  details={detailsUrl}
                  boss={bossUrl}/>
          {this.props.children}
        </div>
    )
  }
}