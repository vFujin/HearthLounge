import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../shared-assets/loader';

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
        let keys = Object.keys(this.props.location.query);
        let values = Object.values(this.props.location.query);
        // let k = Object.assign.apply({}, keys);
        // let v = Object.assign.apply({}, values);
        // console.log(k, v);
        // console.log(this.props.location.query, collectible.filter(x=>x[k] === this.props.location[v]));
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

  handleIconClick(){
    this.setState({
      active_input: true
    })
  }

  cA(card){
    let query = this.props.location.query;
    let keys = Object.keys(query);
    let values = Object.values(query);
    // const keysMatch = Object.keys(query).every(k=>keys.include(k));

    function identical(query, keys, values) {
      return (Object.keys(query).length != keys.length) && keys.every((key, i) => query[key] == values[i]);
    }
    return identical(card, keys, values);
  }

  containAttr(card, attr){
    const input_filters = ['name', 'faction', 'mechanics', 'race', 'type'];
    const icon_filters = ['adventures', 'cost,', 'expansions', 'rarity'];

    switch(attr){
      case input_filters.map(x=>x): return this.state.active_values.indexOf(card[attr]) > -1;
      case 'cost':
      case 'adventures':
      case 'expansions':
      case 'rarity': if(this.props.location.query[attr] !== undefined) return this.props.location.query[attr].indexOf(card[attr]) > -1;
    }
  }



  listCards(){
    if(this.state.cards < 1){
      return <Loader/>;
    }

    return (
      this.state.cards.map(card=>
        <li key={card.cardId}
            onClick={(e)=>this.handleCardClick(e, card)}
            className={ !(this.cA(card) === true) ? "display-none" : ""}>
          <img src={card.img} alt={card.name} />
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
                         query={query}
                         handleInputChange={()=>this.handleInputChange()}
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