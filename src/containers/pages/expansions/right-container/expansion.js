import React, {Component} from 'react';
import {Topbar} from './topbar';
import {navItems} from '../../../../data/nav';
import ValidateURL from '../../../shared-assets/validateUrl';

export class Expansion extends Component{

  content(expansion, details){
    return (
        <div className="content">
          <Topbar expansion={expansion}
                  details={details}/>
          {this.props.children}
        </div>
    )
  }

  validateUrlProps(args){
    const {expansion, details} = this.props.params;
    let path       = this.props.location.pathname.split("/")[2],
        expansions = navItems.filter(x=>x.name === 'expansions').map(x=>x.submenu)[0].map(x=>x.url).includes(path);

    switch(args){
      case 'condition': return expansions;
      case 'content': return this.content(expansion, details);
      default: return null;
    }
  }

  render() {
    return <ValidateURL condition={this.validateUrlProps('condition')}
                        content={this.validateUrlProps('content')}
                        page="expansion"
                        page_url="expansions"/>
  }
}