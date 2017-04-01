import React, { Component } from 'react';
import 'whatwg-fetch';
import FilterSidebar from './picked-class/left-container/filter-sidebar';
import DeckSidebar from './picked-class/left-container/deck-sidebar';
import Topbar from './picked-class/right-container/topbar';
import Loader from '../../shared-assets/loader';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import {Data} from '../../../data/cards-data';
import _ from 'lodash';

export class CreateDeckClassSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: [],
      filtersView: false,
      deckDetails: false,

      name: [],
      cards: [],
      faction: [],
      mechanics: [],
      race: [],
      type: [],

      cardSet: [],
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
    if (e.button === 0 && _.filter(this.state.deck, {cardId: card.cardId}).length < 2 && this.state.deck.length < 30) {
      this.setState({
        deck: this.state.deck.concat(card),
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

  handleDeckDetailsClick(e){
    let isActive = this.state.deckDetails === false ? true : false;
    console.log("alt", e.ctrlKey);
    if(e || e.altKey) {
      this.setState({
        deckDetails: isActive
      })
    }
  }

  countCards(card){
    return _.filter(this.state.deck, {cardId: card.cardId}).length;
  }

  showCardCountTooltip(card, visible_class, callback){
    return this.state[`${card.cardId}_tooltip`] === true ? visible_class : callback;
  }

  listCards(query) {
    let styles = {
      background: 'rgba(255, 0, 0, .5)',
      opacity: '.5',
      cursor: 'not-allowed'
    };

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
                    <img className={`${this.showCardCountTooltip(card, 'choosen', null)} ${this.state.deck.length >= 30 ? "disabled" : ''} `}
                         src={card.img}
                         alt={card.name}/>
                </li>
            )
    )
  }


  handleSidebarViewChange(e){
    if(e.button === 0 || e.ctrlKey) {
      let isActive = this.state.filtersView === false ? true : false;
      this.setState({
        filtersView: isActive
      });
    }
    if(e || e.altKey) {
      let isActive = this.state.deckDetails === false ? true : false;
      this.setState({
        deckDetails: isActive
      })
    }
    // if(e.keyCode > 64 && e.keyCode <= 90){
    //   this.setState({
    //     cards: _.filter(Data, {name: e})
    //   })
    // }
  }


  render() {
    let query = this.props.location.query;
    let params = this.props.params.class;
    let ifDeck = this.state.filtersView === false ? 'deck' : "filters";
    let ifFilter = this.state.filtersView === false ? 'filters' : "deck";
    return (
        <div tabIndex="0" onKeyDown={(e)=>this.handleSidebarViewChange(e)} className="container__page container__page--twoSided create-deck">
          <div className="container__page--inner container__page--left">
            <h3  className="sidebar__header">
              <span>{ifDeck}</span>
              <button className="btn-pearl" onClick={(e)=>this.handleSidebarViewChange(e)}>Show {ifFilter}</button>
            </h3>
            <DeckSidebar filtersView={this.state.filtersView}
                         countCards={(e)=>this.countCards(e)}
                         deck={this.state.deck}
                         deckDetails={this.state.deckDetails}
                         handleDeckDetailClick={(e)=>this.handleDeckDetailsClick(e)}
                         mechanics={this.state.mechanics}
                         params={params}/>

            <FilterSidebar filtersView={this.state.filtersView}
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
            <Topbar filtersView={this.state.filtersView} query={query} params={params} deck={this.state.deck} />
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