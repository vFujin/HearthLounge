import React, { Component } from 'react';
import 'whatwg-fetch';
import FilterSidebar from './picked-class/left-container/filter-sidebar';
import DeckSidebar from './picked-class/left-container/deck-sidebar';
import {Topbar} from './picked-class/right-container/topbar';
import Loader from '../../shared-assets/loader';
import {Data} from '../../../data/cards-data';
import _ from 'lodash';

export class CreateDeckClassSelected extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeSidebar: 'deck',
      nextActiveSidebar: 'filters',
      name: [],
      cards: [],
      faction: [],
      mechanics: [],
      race: [],
      type: [],
      cardSet: [],

      sliderFirstValue: [],
      deck: [],
      mana_cost_0: [],
      mana_cost_1: [],
      mana_cost_2: [],
      mana_cost_3: [],
      mana_cost_4: [],
      mana_cost_5: [],
      mana_cost_6: [],
      mana_cost_7: []
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

    const setState = (cards) =>{
      this.setState({
        cards,
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

  handleClick(e, card) {
    e.preventDefault();
    if (e.button === 0 && _.filter(this.state.deck, {cardId: card.cardId}).length < 2) {
      this.setState({
        deck: this.state.deck.concat(card),
       [`mana_${_.uniqBy(_.map(this.state.deck, 'cost'))}`]: '',
        [`${card.cardId}_tooltip`]: true
      });
    }


    if (e.button === 2 && _.filter(this.state.deck, {cardId: card.cardId}).length > 0) {
      this.setState({
        deck: this.state.deck.filter(function(c){return c.cardId !== card.cardId}),
        [`${card.cardId}_tooltip`]: false
      });
    }
  }

  countCards(card){
    return _.filter(this.state.deck, {cardId: card.cardId}).length;
  }

  showCardCountTooltip(card, visible_class, callback){
    return this.state[`${card.cardId}_tooltip`] === true ? visible_class : callback;
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
                if (query[queryKey].constructor === Array) {
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
                <li key={card.cardId}
                    onContextMenu={this.state.deck ? (e) => this.handleClick(e, card) : null}
                    onClick={this.state.deck ? (e) => this.handleClick(e, card) : null}>
                    <div className={this.showCardCountTooltip(card, 'tooltip-count', 'display-none')}>
                      <span>
                        {this.countCards(card)}/2
                      </span>
                    </div>
                    <img className={this.showCardCountTooltip(card, 'choosen', null)} src={card.img} alt={card.name}/>
                </li>
            )
    )
  }


  handleSidebarViewChange(e){
    if(e || e.ctrlKey) {
      let activeSidebar = this.state.activeSidebar === 'deck' ? 'filters' : 'deck';
      let nextActiveSidebar = this.state.nextActiveSidebar === 'filters' ? 'deck' : 'filters';
      this.setState({
        activeSidebar,
        nextActiveSidebar
      });
    }
  }

  render() {
    let query = this.props.location.query;
    return (
        <div tabIndex="0" onKeyDown={(e)=>this.handleSidebarViewChange(e)} className="container__page container__page--twoSided create-deck">
          <div className="container__page--inner container__page--left">
            <h3  className="sidebar__header">
              <span>{this.state.activeSidebar}</span>
              <button className="btn-pearl" onClick={(e)=>this.handleSidebarViewChange(e)}>Show {this.state.nextActiveSidebar}</button>
            </h3>
            <DeckSidebar activeSidebar={this.state.activeSidebar}
                         deck={this.state.deck}
                         countCards={(e)=>this.countCards(e)}/>
            <FilterSidebar activeSidebar={this.state.activeSidebar}
                           name={this.state.name}
                           race={this.state.race}
                           mechanics={this.state.mechanics}
                           type={this.state.type}
                           faction={this.state.faction}
                           cards={this.state.cards}
                           cardSet={this.state.cardSet}
                           query={query}/>
          </div>
          <div className="container__page--inner container__page--right">
            <div className="topbar"></div>
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