import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: [],
      cardName: null,
      faction: [],
      mechanics: [],
      race: [],
      type: []
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

    fetch(`https://api.hearthstonejson.com/v1/17994/enUS/cards.json`)
      .then(r=>r.json())
      .then(data => {
          this.setState({
            cards: data,
            mechanics: filterAttribute(data, 'mechanics'),
            faction: filterAttribute(data, 'faction'),
            race: filterAttribute(data, 'race'),
            type: filterAttribute(data, 'type'),
          })

      })
  }

  render() {
    let query = this.props.location.query;
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar race={this.state.race}
                         mechanics={this.state.mechanics}
                         type={this.state.type}
                         faction={this.state.faction}
                         query={query}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={query}/>

              <ul className="cards-container">
                {this.state.cards.slice(1, 100).map(x=>x).filter(x=>x.artist).map(card=>
                    <li key={card.id}>
                      <img src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${card.id}.png`} alt={card.name} />
                    </li>
                )}
              </ul>
            </div>
        </div>
    );
  }
}