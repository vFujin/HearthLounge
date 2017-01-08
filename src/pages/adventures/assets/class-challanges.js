import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
import unirest from 'unirest';
export class AdventureClassChallanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  s() {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/Loatheb")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          let adventure = this.props.adventure;
          console.log(adventure);
          this.setState({
            cards: res.body['basic']
          });

        });
  }
  render() {
    return (
        <div className={`class-challanges inner-container ${this.props.active === 'class-challanges' && 'active'}-view`}>
          {adventure_details.map((element, index)=>
          <div className={`${this.props.adventure === element.adventure && 'active'}-view `} key={index}>
              <ul key={index}>
                {element.class_challanges.map((element, index)=>
                  <li key={index}>
                    <p>{element.class}</p>
                    {this.state.cards.map((card, i)=>
                      <div key={i}><img src={card.img} alt={`${card.name}`}/></div>
                    )}
                  </li>
                  )}

              </ul>

          </div>
          )}

        </div>
    );
  }
}