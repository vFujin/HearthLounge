import React, {Component} from 'react';
import {Topbar} from './topbar';
import {navItems} from '../../../../data/nav';
import ValidateURL from '../../../shared-assets/validateUrl';

export class Adventure extends Component{

  content(adventure, details, boss){
    return (
        <div className="content">
          <Topbar adventure={adventure}
                  details={details}
                  boss={boss}/>
          {this.props.children}
        </div>
    )
  }

  validateUrlProps(args){
    const {adventure, details, boss} = this.props.params;
    let path       = this.props.location.pathname.split("/")[2],
        adventures = navItems.filter(x=>x.name === 'adventures').map(x=>x.submenu)[0].map(x=>x.url).includes(path);

    switch(args){
      case 'condition': return adventures;
      case 'content': return this.content(adventure, details, boss);
      default: return null;
    }
  }

  render() {
    return <ValidateURL condition={this.validateUrlProps('condition')}
                        content={this.validateUrlProps('content')}
                        page="adventure"
                        redirect="adventures"/>
  }
}