import React, { Component } from 'react';
import 'whatwg-fetch';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import Loader from '../../../../utils/loader';
import 'antd/lib/tooltip/style/css';
import {connect} from 'react-redux';
import _ from 'lodash';
import domtoimage from 'dom-to-image';

const CreateDeckClassSelected = ({cards, cardSet, deck, deckMechanics, editDeck, faction, filters, location, mechanics,
name, params, race, showDeckEditingTool, summarizedDeck, toggleDeckMechanics, toggleFilters, type, user}) => {

  const query = location.query;


  const countUniqueCards = (card) => {
    return _.filter(deck, {cardId: card.cardId}).length;
  };

  const handleCardClick = (e, card) => {
    e.preventDefault();
    let ifLegendary = card.rarity !== "Legendary" ? countUniqueCards(card) < 2 : countUniqueCards(card) < 1;
    if (e.button === 0 && ifLegendary && deck.length < 30) {
      editDeck(deck.concat(card));
      // this.setState({
      //   [`${card.cardId}_tooltip`]: true
      // });
    }

    if (e.button === 2 && countUniqueCards(card) > 0) {
      editDeck(_.filter(deck, (c) => c.cardId !== card.cardId));
      // this.setState({
      //
      //   deck: this.state.deck.filter(function(c){return c.cardId !== card.cardId}),
      //   [`${card.cardId}_tooltip`]: false
      // });
    }
  };



  const showCardCountTooltip = (card, visibleClass, defaultClass) => {
    // return
  };

  const toggleCardAmountTooltip = (card) => {
    const CardTooltip = () =>{
      return (
          <div className="tooltip-count">
              <span>
                {countUniqueCards(card)}/{card.rarity !== "Legendary" ? 2 : 1}
              </span>
          </div>
      )
    };

    return (
        deck.filter(c => c.cardId === card.cardId).length > 0 ? <CardTooltip /> : null
    )
  };

  const listCards = () => {
    if (cards < 1) {
      return <Loader/>;
    }
    else {
      return (
          cards.filter(card => card.playerClass === _.upperFirst(params.class) || card.playerClass === "Neutral")
              .map(card =>
                  <li key={card.cardId}
                      onContextMenu={deck ? (e) => handleCardClick(e, card) : null}
                      onClick={deck ? (e) => handleCardClick(e, card) : null}>
                    {toggleCardAmountTooltip(card)}
                    <img
                        className={`${showCardCountTooltip(card, 'choosen', null)} ${deck.length >= 30 ? "disabled" : ''} `}
                        src={card.img}
                        alt={card.name}/>
                  </li>
              )
      )
    }
  };

  const handleFiltersToggle = () => {
    toggleFilters(filters === false ? true : false)
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
  const handleDeckMechanicsToggle = () => {
    // console.log(this.props.deckMechanics);
    // let areActive = this.props.deckMechanics === false ? true : false
    toggleDeckMechanics(true);
  };

  const handleCopyDeckURLClick = () =>{
    let json = { ...summarizedDeck},
        stringifiedJson = JSON.stringify(json);

    console.log(btoa(stringifiedJson))
  };

  const handleImageCapture = () =>{
    let deckList = document.getElementById('decklist-to-img');
    domtoimage.toJpeg(deckList, {bgcolor: '#E7E2DA'})
        .then(dataUrl=>{
          let link = document.createElement('a');
          link.download = 'deck.jpeg';
          link.href = dataUrl;
          link.click();
        })
        .catch(error=>{
          console.error("something went wrong", error)
        });
  };

  const handleOptionsClick = (icon) => {
    console.log(icon);
    switch (icon) {
      case 'link': return handleCopyDeckURLClick();
      case 'copy': return handleImageCapture();
      case 'download': return showDeckEditingTool(true);
    }
  };


  return (
      <div tabIndex="0" onKeyDown={(e) => handleFiltersToggle(e)}
           className="container__page container__page--twoSided create-deck">
        <LeftContainer handleSidebarViewChange={(e) => handleFiltersToggle(e)}
                       filtersView={filters}
                       countCards={(e) => countUniqueCards(e)}
                       deck={deck}
                       deckDetails={deckMechanics}
                       handleDeckMechanicsToggle={handleDeckMechanicsToggle}
                       params={params}
                       name={name}
                       race={race}
                       mechanics={mechanics}
                       type={type}
                       faction={faction}
                       cards={cards}
                       cardSet={cardSet}
                       query={query}/>

        <RightContainer filtersView={filters}
                        query={query}
                        activeClass={params.class}
                        deck={deck}
                        handleOptionsClick={handleOptionsClick}
                        cards={listCards(query)}
                        visible={true}
                        user={user}/>
      </div>
  );
};

const mapStateToProps = (state) =>{
  const {filters, editingTool, deckMechanics, deck, summarizedDeck} = state.deckCreation;

  return {
    filters,
    editingTool,
    deckMechanics,
    deck,
    summarizedDeck
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFilters: (filters) => dispatch({
      type: 'TOGGLE_FILTERS', filters
    }),
    showDeckEditingTool: (editingTool) => dispatch({
      type: 'SHOW_DECK_EDITING_TOOL', editingTool
    }),
    toggleDeckMechanics: (deckMechanics) => dispatch({
      type: 'TOGGLE_DECK_MECHANICS', deckMechanics
    }),
    editDeck: (deck) => dispatch({
      type: 'EDIT_DECK', deck, summarizedDeck: deck.map(c=>c.cardId)
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);