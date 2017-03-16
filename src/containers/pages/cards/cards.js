import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../shared-assets/loader';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
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

      switch(attribute){
        case 'faction':
        case 'race':
        case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) == i);
        case 'mechanics': return initialFiltering.map(x=>x[0]).filter((x, i, a)=>a.indexOf(x) == i);
      }
    };

    fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards`, {
      headers: {
        'X-Mashape-Key': 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q'
      }
    })
      .then(r=>r.json())
      .then(data => {
        let allData = Object.values(data).reduce((a, b) => a.concat(b)); //all cards returned at once

        const collectible = data["Blackrock Mountain"].filter(x=>x.hasOwnProperty('collectible') === true).map(x=>x);
        console.log(collectible);
        this.setState({
          cards: collectible,
          mechanics: filterAttribute(data["Basic"], 'mechanics'),
          faction: filterAttribute(data["Basic"], 'faction'),
          race: filterAttribute(data["Basic"], 'race'),
          type: filterAttribute(data["Basic"], 'type'),
        })
      })
  }


  handleCardClick(e, card){
    let target = e.target;
    console.log(card);
  }

  handleInputChange(values) {
    let s = []; let x = s.push(values);
    console.log(x);
    this.setState({
      active_input: values < 1 ? false : true,
      active_values: values
    })

  };

  containAttr(card, attr){
    return this.state.active_values.indexOf(card[attr]) > -1;
  }

  listCards(){
    if(this.state.cards < 1){
      return <Loader/>
    }
    else {
      console.log(this.state.active_values)
      return (
        this.state.cards.map(card=>
          <li key={card.cardId} onClick={(e)=>this.handleCardClick(e, card)} className={!(this.containAttr(card, 'race')) && this.state.active_input === true ? "display-none" : ""}>
            <img src={card.img} alt={card.name} />
          </li>
        )
      )
    }
  }

  render() {
    let query = this.props.location.query;
    //
    // console.log(this.state.active_race.map(x=>x)[0]);
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar race={this.state.race}
                         mechanics={this.state.mechanics}
                         type={this.state.type}
                         faction={this.state.faction}
                         query={query}
                         handleInputChange={(v)=>this.handleInputChange(v)}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={query}/>

              <ul className="cards-container">
                {this.listCards()}
              </ul>
            </div>
        </div>
    );
  }
}