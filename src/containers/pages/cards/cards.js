import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../shared-assets/loader';
import {browserHistory} from 'react-router';

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

      //Input filters
      active_input: false,
      active_values: []
    }
  }

  componentDidMount(){


    const filterAttribute = (data, attribute) =>{
      let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);
      console.log();
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


    fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards`, {
      headers: {
        'X-Mashape-Key': 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q'
      }
    })
      .then(r=>r.json())
      .then(data => {
        // let d = Object.values(data).reduce((a, b) => a.concat(b)); //all cards returned at once
        let d = data["Basic"];
        const collectible = d.filter(x=>x.hasOwnProperty('collectible') === true).map(x=>x);
        // console.log(collectible);
        this.setState({
          cards: collectible,
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

  handleInputChange(values) {
    this.setState({
      active_input: values < 1 ? false : true,
      active_values: values
    });
  };

  handleIconClick(e){
    this.setState({
      active_input: true
    })
  }

  handleInputOptionDeselect(e, filter){
    let queries = this.props.location.query;
    switch(filter){
      case 'name': {
        const {name, ...destructedQueries} = queries;
        console.log(queries, destructedQueries);
        if(destructedQueries !== '') {
          browserHistory.push('/cards?'+destructedQueries);
        }
        break;
      }
      case 'race': {
        const {race, ...destructedQueries} = queries;
        console.log(queries, destructedQueries);
        if(destructedQueries !== '') {
          browserHistory.push('/cards?'+destructedQueries);
        }
      }
    }
  }


  containAttr(card, attr){
    switch(attr){
      case 'name':
      case 'faction':
      case 'race':
      case 'type':
      case 'mechanics': return this.state.active_values.indexOf(card[attr]) > -1;
      case 'cost':
      case 'adventures':
      case 'expansions':
      case 'rarity': if(this.props.location.query[attr] !== undefined) return this.props.location.query[attr].indexOf(card[attr]) > -1;
    }
  }


  listCards(){
    if(this.state.cards < 1){
      return <Loader/>
    }
    else {
      const queries = Object.keys(this.props.location.query);
      return (
        this.state.cards.map(card=>
          <li key={card.cardId} onClick={(e)=>this.handleCardClick(e, card)} className={!(this.containAttr(card, queries)) && this.state.active_input === true ? "display-none" : ""}>
            <img src={card.img} alt={card.name} />
          </li>
        )
      )
    }
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
                         query={query}
                         handleInputChange={(v)=>this.handleInputChange(v)}
                         handleInputOptionDeselect={(v, filter)=>this.handleInputOptionDeselect(v, filter)}
                         handleIconClick={(e)=>this.handleIconClick(e)}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={query}  handleIconClick={(e)=>this.handleIconClick(e)}/>

              <ul className="cards-container">
                {this.listCards()}
              </ul>
            </div>
        </div>
    );
  }
}