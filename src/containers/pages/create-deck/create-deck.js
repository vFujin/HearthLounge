import React, {Component} from 'react';

export class CreateDeck extends Component{
  render(){
    return(
        <div className="container__page container__page--oneSided create-deck">
          {this.props.children}
        </div>
    )
  }
}