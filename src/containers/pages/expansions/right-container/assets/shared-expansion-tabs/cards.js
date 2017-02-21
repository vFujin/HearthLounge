import React, { Component } from 'react';
import unirest from 'unirest';
export class ExpansionCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  componentWillReceiveProps() {
    console.log('foobar');
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1?locale=plPL")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          let expansion = this.props.expansion;
          // console.log(res.body);
          this.setState({
            cards: res.body[expansion]
          });

        });
  }


  render() {
    return (
        <ul className={`cards cards-container ${this.props.topbarActiveTabUrl} ${this.props.topbarActiveTabUrl === 'cards' && 'active'}-view`}>
          {this.state.cards.map((card, i)=>
              <li key={i}>
                <img src={card.img} alt={`${card.name}`}/>
              </li>
          )}
        </ul>
    );
  }
}