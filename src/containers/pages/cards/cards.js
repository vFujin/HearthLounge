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
      cardName: '',
      statistics: '',
      faction: '',
      race: '',
      mechanics: '',
      dust: '',
      expansions: '',
      adventures: '',
      rarity: '',
      goldenCards: '',

      //Topbar
      manaFilter: null,
      hsClass: '',

      //Cards
      cards: []

    }
  }

  handleManaFilterClick(i){
    let isActive = this.state.manaFilter === i ? null : i;
    this.setState({
      manaFilter: isActive
    })
  }

  componentDidMount() {
    console.log('mounted');
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1?locale=plPL")
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          this.setState({
            cards: res.body['Basic'].slice(0, 10)
          });

        });
  }

  render() {
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar/>
            </div>
            <div className="right-container">
                <Topbar handleManaFilterClick={this.handleManaFilterClick.bind(this)}
                        manaFilter={this.state.manaFilter}/>
                <ServiceCards cards={this.state.cards}/>
            </div>
        </div>
    );
  }
}