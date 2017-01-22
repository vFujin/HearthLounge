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
      cards: [],
      filters: []
    }
  }

  handleInputFilter(selector, val){
    this.setState({
      [selector]: val
    });
  }

  handleFilterClick(i, filter, event){
    let dataAtt = event.target.dataset['filter'];
    let isActive = this.state[filter] === i ? null : i;
    console.log(dataAtt);
    this.setState({
      [filter]: isActive,
      filters: this.state.filters.concat([dataAtt])
    })
  }



  componentDidMount() {
    console.log('mounted');
    unirest.get("https://api.hearthstonejson.com/v1/15590/plPL/cards.collectible.json")
        .headers({
          'Accept': 'application/json',
          "Access-Control-Allow-Headers": "x-requested-with, x-requested-by"
        })
        .end(res => {
          console.log('Response: ' + JSON.stringify(res));
          this.setState({
            // cards: res.body
          });
        });

  }


  render() {
    return (

        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar handleFilterClick={this.handleFilterClick.bind(this)}
                         handleInputFilter={this.handleInputFilter.bind(this)}
                         statistics={this.state.statistics}
                         race={this.state.race}
                         mechanics={this.state.mechanics}
                         dust={this.state.dust}

                         faction={this.state.faction}
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