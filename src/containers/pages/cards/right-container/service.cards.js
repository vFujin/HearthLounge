import React, { Component } from 'react';
import unirest from 'unirest';

export class ServiceCards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount()  {
    function getCardProps(res, state){

    }

    // let hsClass = this.props.params.class;

    unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`)
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          for(let prop in res.body){
            for(let p in res.body[prop]) {
              this.setState((prevState)=>({
                cards: prevState.cards.concat(res.body[prop].map(x => x)[p])
              }));
            }
          }

        });
  }

  render() {
    return (
        <ul className="cards-container">

          {this.state.cards.slice(9, 19).map(x=>x).filter(x=>x.artist).map(card=>
            <li key={card.cardId}>
              <img src={card.img} />
            </li>
          )}
        </ul>
    );
  }
}