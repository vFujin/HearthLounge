import React, {Component} from 'react';
import 'whatwg-fetch';
import {navItems} from '../../../../data/nav';
import Topbar from './topbar';
import ValidateURL from '../../../shared-assets/validateUrl';

export class Expansion extends Component{
  constructor(props){
    super(props);

    this.setState({
      cards: []
    })
  }

  componentDidMount(){
    fetch('https://api.hearthstonejson.com/v1/17994/enUS/cards.collectible.json')
        .then(r=>r.json())
        .then(cards=>
            this.setState({cards})
        )
  }

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
                        redirect="expansions"/>
  }
}