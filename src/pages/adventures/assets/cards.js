import React, { Component } from 'react';
import unirest from 'unirest';
export class AdventureCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  componentWillReceiveProps() {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1?locale=plPL")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          let adventure = this.props.adventure;
          console.log(adventure);
          this.setState({
            cards: res.body[adventure]
          });

        });
  }


  render() {
    return (
        <ul className={`cards cards-container ${this.props.active === 'cards' && 'active'}-view`}>
          {this.state.cards.map((card, i)=>
              <li key={i}>
                <img src={card.img} alt={`${card.name}`}/>
              </li>
          )}
        </ul>
    );
  }
}