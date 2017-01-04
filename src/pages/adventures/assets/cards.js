import React, { Component } from 'react';
import unirest from 'unirest';
export class AdventureCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  componentDidMount() {
    console.log('mounted');
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1?locale=plPL")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          console.log(res.body);
          this.setState({
            cards: res.body['basic']
          });

        });
  }


  render() {
    return (
        <ul className="cards-container">
          {this.state.cards.map((card, i)=>
              <li key={i}>
                <img src={card.img} alt={`${card.name}`}/>
              </li>
          )}
        </ul>
    );
  }
}