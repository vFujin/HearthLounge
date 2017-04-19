import React, { Component } from 'react';
import 'whatwg-fetch';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import Loader from '../../../../utils/loader';
import 'antd/lib/tooltip/style/css';
import {Data} from '../../../../data/cards-data';

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
      sliderFirstValue: [],

      modal: false,
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
    let uniqueCard = _.filter(this.state.deck, {cardId: card.cardId});
    let ifLegendary = card.rarity !== "Legendary" ? uniqueCard.length < 2 : uniqueCard.length < 1;

    if (e.button === 0 && ifLegendary && this.state.deck.length < 30) {
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

  handleDeckMechanicsClick(e){
    let isActive = this.state.deckDetails === false ? true : false;
    console.log("alt", e.ctrlKey);
    if(e.keyCode = 8) {
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

    return (
        this.state.cards
            .filter(function (card) {
              return Object.keys(query).every(function (queryKey) {
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
                        {this.countCards(card)}/{card.rarity !== "Legendary" ? 2 : 1}
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
    if(e.altKey) {
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

  handleDeckSaving(e){
    let modalIsActive = this.state.modal === false ? true : false;
    this.setState({
      modal: modalIsActive
    })
  }


  render() {
    const {location, params} = this.props;
    let query = location.query;
    return (
        <div tabIndex="0" onKeyDown={(e)=>this.handleSidebarViewChange(e)} className="container__page container__page--twoSided create-deck">
          <LeftContainer handleSidebarViewChange={(e)=>this.handleSidebarViewChange(e)}
                         filtersView={this.state.filtersView}
                         countCards={(e)=>this.countCards(e)}
                         deck={this.state.deck}
                         deckDetails={this.state.deckDetails}
                         handleDeckDetailClick={(e)=>this.handleDeckMechanicsClick(e)}
                         params={params}
                         name={this.state.name}
                         race={this.state.race}
                         mechanics={this.state.mechanics}
                         type={this.state.type}
                         faction={this.state.faction}
                         cards={this.state.cards}
                         cardSet={this.state.cardSet}
                         query={query} />

          <RightContainer filtersView={this.state.filtersView}
                          query={query} params={params}
                          deck={this.state.deck}
                          handleDeckSaving={(e)=>this.handleDeckSaving(e)}
                          cards={this.listCards(query)}
                          visible={this.state.modal}/>
        </div>
    );
  }
}