import React, {Component} from 'react';
import 'whatwg-fetch';
import {navItems} from '../../../../data/nav';
import ValidateURL from '../../../shared-assets/validateUrl';

export class Expansion extends Component{
  constructor(props){
    super(props);

    this.state = {
      cards: []
    }
  }

  componentDidMount(){
    fetch('https://api.hearthstonejson.com/v1/17994/enUS/cards.collectible.json')
        .then(r=>r.json())
        .then(cards=>
            this.setState({cards})
        )
  }

  content(details, expansion){
    return (
      <div className="content">
        {React.cloneElement(this.props.children, {cards: this.props.cards})}
      </div>
    )
  }

  validateUrlProps(args){
    const {details, expansion} = this.props.params;
    let path       = this.props.location.pathname.split("/")[2],
        expansions = navItems.filter(x=>x.name === 'expansions').map(x=>x.submenu)[0].map(x=>x.url).includes(path);

    switch(args){
      case 'condition': return expansions;
      case 'content': return this.content(details, expansion);
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