import React, {Component} from 'react';
import {Topbar} from './topbar';
import {navItems} from '../../../../data/nav';
import NotFound from '../../../shared-assets/not-found';

export class Adventure extends Component{

  validateUrl(){
    let path = this.props.location.pathname.split("/")[2];
    let adventures = navItems.filter(x=>x.name === 'adventures').map(x=>x.submenu)[0].map(x=>x.url).includes(path);

    let adventureUrl = this.props.params.adventure;
    let detailsUrl   = this.props.params.details;
    let bossUrl      = this.props.params.boss;

    if(adventures !== true){
      return <NotFound page="adventure" url="adventures"/>;
    }
    else{
      return(
        <div className="content">
          <Topbar adventure={adventureUrl}
                  details={detailsUrl}
                  boss={bossUrl}/>
          {this.props.children}
        </div>
      )
    }
  }


  render() {
    return this.validateUrl()
  }
}