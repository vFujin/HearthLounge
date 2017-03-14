import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {Sidebar} from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardName: null,
      statistics: null,
      faction: [],
      race: [],
      mechanics: [],
      dust: null
    }
  }

  componentDidMount(){

    const filterAttribute = (data, attribute) =>{
      let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);

      switch(attribute){
        case 'faction':
        case 'race': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) == i);
        case 'mechanics': return initialFiltering.map(x=>x[0]).filter((x, i, a)=>a.indexOf(x) == i);
      }
    };

    fetch(`https://api.hearthstonejson.com/v1/17994/enUS/cards.collectible.json`)
      .then(r=>r.json())
      .then(data => {
          this.setState({
            mechanics: filterAttribute(data, 'mechanics'),
            faction: filterAttribute(data, 'faction'),
            race: filterAttribute(data, 'race')
          })

      })
  }



  handleInputFilter(selector, val){
    this.setState({
      [selector]: val
    });
  }


  render() {
    let query = this.props.location.query;
    return (
        <div className="pageContainer cards">
            <div className="left-container">
                <Sidebar handleInputFilter={this.handleInputFilter.bind(this)}
                         statistics={this.state.statistics}
                         race={this.state.race}
                         mechanics={this.state.mechanics}
                         dust={this.state.dust}
                         query={query}/>
            </div>
            <div className="right-container">
                <CardsTopbarFilters query={query}/>
                {this.props.children}
            </div>
        </div>
    );
  }
}