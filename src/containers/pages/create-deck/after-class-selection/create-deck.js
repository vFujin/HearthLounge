import React, { Component } from 'react';
import 'whatwg-fetch';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import Loader from '../../../../utils/loader';
import 'antd/lib/tooltip/style/css';
import {connect} from 'react-redux';
import _ from 'lodash';


class CreateDeckClassSelected extends Component {
  constructor(props){
    super(props);
    this.state = {
      deck: [],
      filtersView: false,
      deckDetails: false,

      sliderFirstValue: [],

      modal: false,
    }
  }

  handleCardClick(e, card) {
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
  }

  countCards(card){
    return _.filter(this.state.deck, {cardId: card.cardId}).length;
  }

  showCardCountTooltip(card, visible_class, callback){
    return this.state[`${card.cardId}_tooltip`] === true ? visible_class : callback;
  }

  listCards(query) {
    if (this.props.cards < 1) {
      return <Loader/>;
    }
    else {
      return (
        this.props.cards.filter(card=>card.playerClass === _.upperFirst(this.props.params.class) || card.playerClass === "Neutral")
            .map(card =>
                <li key={card.cardId}
                    onContextMenu={this.state.deck ? (e) => this.handleCardClick(e, card) : null}
                    onClick={this.state.deck ? (e) => this.handleCardClick(e, card) : null}>
                  <div className={this.showCardCountTooltip(card, 'tooltip-count', 'display-none')}>
                    <span>
                      {this.countCards(card)}/{card.rarity !== "Legendary" ? 2 : 1}
                    </span>
                  </div>
                  <img
                      className={`${this.showCardCountTooltip(card, 'choosen', null)} ${this.state.deck.length >= 30 ? "disabled" : ''} `}
                      src={card.img}
                      alt={card.name}/>
                </li>
            )
      )
    }
  }

  handleFiltersToogle(e){
    this.props.toggleFilters(this.props.filters === false ? true : false)
    // if(e.button === 0) {
    //   let isActive = filtersView === false ? true : false;
    //   this.setState({
    //     filtersView: isActive
    //   });
    // }
    // if(e.altKey) {
    //   let isActive = deckDetails === false ? true : false;
    //   this.setState({
    //     deckDetails: isActive
    //   })
    // }
    // if(e.keyCode > 64 && e.keyCode <= 90){
    //   this.setState({
    //     cards: _.filter(Data, {name: e})
    //   })
    // }
  }

  handleDeckDetailsPage(){

  }

  handleOptionsClick(icon){
    console.log(icon);
      switch(icon) {
        case 'link':
          return;
        case 'copy':
          return;
        case 'download':
          return this.handleDeckDetailsPage;
      }
  }


  render() {
    const {location, params, name, race, mechanics, faction, type, cards, cardSet} = this.props;
    let query = location.query;
    return (
        <div tabIndex="0" onKeyDown={(e)=>this.handleFiltersToogle(e)} className="container__page container__page--twoSided create-deck">
          <LeftContainer handleSidebarViewChange={(e)=>this.handleFiltersToogle(e)}
                         filtersView={this.props.filters}
                         countCards={(e)=>this.countCards(e)}
                         deck={this.state.deck}
                         deckDetails={this.state.deckDetails}
                         handleDeckDetailClick={(e)=>this.handleDeckMechanicsClick(e)}
                         params={params}
                         name={name}
                         race={race}
                         mechanics={mechanics}
                         type={type}
                         faction={faction}
                         cards={cards}
                         cardSet={cardSet}
                         query={query} />

          <RightContainer filtersView={this.props.filters}
                          query={query}
                          activeClass={params.class}
                          deck={this.state.deck}
                          handleOptionsClick={this.handleOptionsClick}
                          cards={this.listCards(query)}
                          visible={!this.state.modal}
                          user={this.props.user}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {filters} = state.deckCreation;
  return {
    filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilters: (filters) => dispatch({
      type: 'TOGGLE_FILTERS', filters
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);