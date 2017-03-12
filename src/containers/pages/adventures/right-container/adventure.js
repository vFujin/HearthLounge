import React, {Component} from 'react';
import {Topbar} from './topbar';
import {navItems} from '../../../../data/nav';
class AppDynamicComponent extends Component {
  componentWillMount() {
    console.log(navItems.map(x=>x), this.props.location.pathname);
    if(this.props.location.pathname){

    }
  }
}

export class Adventure extends AppDynamicComponent{



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