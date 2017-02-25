import React, {Component} from 'react';
import unirest from 'unirest';

export class CreateDeck extends Component{
  constructor(props){
    super(props);
    this.state = {
      cards: []
    };
  }

  componentWillUpdate()  {
    unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/druid?collectible=1&locale=plPL`)
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {

          this.setState({
            cards: res.body
          });
        });
  }

  render(){
    return(
        <div className="pageContainer create-deck">
          {this.props.children}
        </div>
    )
  }
}