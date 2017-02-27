import React, {Component} from 'react';
import {Topbar} from './topbar';

// class AppDynamicComponent extends Component {
//   validateUrl() {
//
//   }
// }

export class Adventure extends Component{

  componentWillMount() {
    console.log('before render', this.props.params.adventure);
  }

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