import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../shared-assets/loader';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import {CardDetails} from './right-container/card-details';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: [],
      cards: [],
      cardName: null,
      faction: [],
      mechanics: [],
      race: [],
      type: [],

      sliderFirstValue: []
    }
  }

  componentDidMount(){
    const filterAttribute = (data, attribute) =>{
      let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);

      switch(attribute){
        case 'name':
        case 'faction':
        case 'race':
        case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) === i);
        case 'cost': return data.filter(x=>x.cost).map(x=>x.cost).filter((x, i, a)=>a.indexOf(x) === i);
        case 'mechanics': return initialFiltering.reduce((a,b)=>a.concat(b)).map(x=>x.name).filter((x, i, a)=>a.indexOf(x) === i);
        default: return null;
      }
    };

    fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
      headers: {
        'X-Mashape-Key': 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q'
      }
    })
      .then(r=>r.json())
      .then(data => {
        // let d = Object.values(data).reduce((a, b) => a.concat(b)); //all cards returned at once
        let d = data["Naxxramas"];

        this.setState({
          cards: d,
          name: filterAttribute(d, 'name'),
          mechanics: filterAttribute(d, 'mechanics'),
          faction: filterAttribute(d, 'faction'),
          race: filterAttribute(d, 'race'),
          type: filterAttribute(d, 'type'),
          cost: filterAttribute(d, 'cost')
        })
      })
  }

  handleCardClick(e, card){
    // let target = e.target;
    console.log(card);
  }

  listCards(query) {
    if (this.state.cards < 1) {
      return <Loader/>;
    }
    return (
      this.state.cards.slice(9)
        .filter(function (card) {
          return Object.keys(query).every(function (queryKey) {
            if (Array.isArray(query[queryKey])) {
              return query[queryKey].some(queryValue => card[queryKey] == queryValue);
            }
            else {
              return card[queryKey] == query[queryKey];
            }
          })
        })
        .map(card =>
          <li key={card.cardId} onClick={(e) => this.handleCardClick(e, card)}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <img src={card.img} alt={card.name}/>
            </Tooltip>
          </li>
        )
    )
  }

  render() {
    let query = this.props.location.query;

    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar name={this.state.name}
                         race={this.state.race}
                         mechanics={this.state.mechanics}
                         type={this.state.type}
                         faction={this.state.faction}
                         query={query}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={query}/>

              <ul className="cards-container">
                {this.listCards(query)}
              </ul>
            </div>
        </div>
    );
  }
}