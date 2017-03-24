import React, { Component } from 'react';
import Sidebar from './left-container/sidebar';
import CardsTopbarFilters from './right-container/topbar';
import Loader from '../../shared-assets/loader';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import {CardDetails} from './right-container/card-details';
import {Data} from '../../../data/cards-data';

export class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: [],
      cards: [],
      faction: [],
      mechanics: [],
      race: [],
      type: [],
      cardSet: [],
      data: null,

      sliderFirstValue: []
    }
  }

  componentDidMount(){
    const getUniqueAttributes = (data, attribute) =>{
      let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);

      switch(attribute){
        case 'name':
        case 'faction':
        case 'race':
        case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) === i);
        case 'cardSet':
        case 'cost': return data.filter(x=>x.cost).map(x=>x.cost).filter((x, i, a)=>a.indexOf(x) === i);
        case 'mechanics': return initialFiltering.reduce((a,b)=>a.concat(b)).map(x=>x.name).filter((x, i, a)=>a.indexOf(x) === i);
        default: return null;
      }
    };

    const setState = (cards, data) =>{
      this.setState({
        cards,
        data,
        name: getUniqueAttributes(cards, 'name'),
        mechanics: getUniqueAttributes(cards, 'mechanics'),
        faction: getUniqueAttributes(cards, 'faction'),
        race: getUniqueAttributes(cards, 'race'),
        type: getUniqueAttributes(cards, 'type'),
        cost: getUniqueAttributes(cards, 'cost'),
        cardSet: getUniqueAttributes(cards, 'cardSet')

      });
    };

    Data.fetchData(setState);
  }

  handleCardClick(e, card){
    // let target = e.target;
    console.log(card);
  }


  listCards(query) {
    if (this.state.cards < 1) {
      return <Loader/>;
    }

    //
    // let predicates = [p1, p2, p3, p4];
    //
    // let filterCard = (card) => predicates.reduce((res, pr) => res && pr(card), true);
    //
    // (card) => card.race === this.state.value;
    //
    // this.state.card.filter(filterCard);
    //
    // this.state.card.filter(x=>x.mechanics)  //p1
    // this.state.card.filter(x=>x.race)  //p2
    // this.state.card.filter(x=>x.faction)  //p3
    // this.state.card.filter(x=>x.mechanics)
    // this.state.card.filter(x=>x.mechanics)

    return (
      this.state.cards
        .filter(function (card) {
          return Object.keys(query).every(function (queryKey) {
            // if (queryKey === 'mechanics') {
            //   console.log(queryKey);
            //   return query[queryKey].some(queryValue => {
            //     console.log(queryValue, card[queryKey].indexOf(queryValue) > -1);
            //     return card[queryKey].indexOf(queryValue) > -1;
            //   });
            // }
            if (queryKey === 'health') {

            } else if (query[queryKey].constructor === Array) {
              return query[queryKey].some(queryValue => {

                return card[queryKey] == queryValue
              });
            }

            else{
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
        <div className="container__page container__page--twoSided cards">
            <div className="container__page--inner  container__page--left">
              <h3 className="sidebar__header">Filters</h3>
              <Sidebar name={this.state.name}
                       race={this.state.race}
                       mechanics={this.state.mechanics}
                       type={this.state.type}
                       faction={this.state.faction}
                       cards={this.state.cards}
                       data={this.state.data}
                       cardSet={this.state.cardSet}
                       query={query}/>
            </div>
            <div className="container__page--inner container__page--right">
              <CardsTopbarFilters query={query} data={this.state.data}/>
              <div className="content">
                <ul className="container__cards">
                  {this.listCards(query)}
                </ul>
              </div>

            </div>
        </div>
    );
  }
}