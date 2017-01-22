import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {ServiceCards} from './right-container/service.cards';
import unirest from 'unirest';

export class Cards extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sidebar
      cardName: null,
      statistics: null,
      faction: null,
      race: null,
      mechanics: null,
      dust: null,
      expansion: null,
      adventure: null,
      rarity: null,
      goldenCards: null,

      //Topbar
      manaFilter: null,
      hsClass: null,

      //Cards
      cards: []

    }
  }

  handleFilterClick(i, filter, event){
    let isActive = this.state[filter] === i ? null : i;
    let dataAtt = event.target.dataset['filter'];
    console.log(dataAtt);
    this.setState({
      [filter]: isActive
    })
  }

  componentDidMount() {
    console.log('mounted');
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1?cost=7?locale=plPL")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          console.log(res.body);
          this.setState({
            cards: res.body['Basic'].slice(0, 10)
          });
        });
  }

  render() {
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar handleFilterClick={this.handleFilterClick.bind(this)}
                         expansion={this.state.expansion}
                         adventure={this.state.adventure}
                         rarity={this.state.rarity}/>
            </div>
            <div className="right-container">
                <Topbar handleFilterClick={this.handleFilterClick.bind(this)}
                        manaFilter={this.state.manaFilter}
                        hsClass={this.state.hsClass}/>
                <ServiceCards cards={this.state.cards}/>
            </div>
        </div>
    );
  }
}