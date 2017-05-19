import React from 'react';
import _ from 'lodash';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import Loader from '../../../../utils/loader';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/popover/style/css';
import {connect} from 'react-redux';
import 'antd/lib/message/style/index.css';
import LazyLoad from 'react-lazyload';
import {loading} from '../../../../utils/messages';
import {copyDeckUrlToClipboard} from '../../../../utils/copy-deck-url-to-clipboard';
import {captureDecklist} from '../../../../utils/capture-decklist';

const CreateDeckClassSelected = ({cards, deck, deckMechanics, editDeck, editingTool, filters, imgReadyDecklist, location, params, showDeckEditingTool, summarizedDeck,
                                   toggleDeckMechanics, toggleFilters, toggleImgReadyDecklist, simplifiedDeck, simplifyDeck, user, updateURL}) => {
  const {allCards, name, faction, race, mechanics, type, cardSet} = cards;
  const query = location.query;
  let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
  const countUniqueCards = (card) => {
    return _.filter(deck, {cardId: card.cardId}).length;
  };

  const handleCardClick = (e, card) => {
    e.preventDefault();
    let ifLegendary = card.rarity !== "Legendary" ? countUniqueCards(card) < 2 : countUniqueCards(card) < 1;
    if (e.button === 0 && ifLegendary && deck.length < 30) {
      editDeck(deck.concat(card));
    }

    if (e.button === 2 && countUniqueCards(card) > 0) {
      editDeck(_.filter(deck, (c) => c.cardId !== card.cardId));
    }
  };

  const deckSimplification = () => {
    let cards = {};
    let types = {};
    let manaCurve = {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
    };
    let max = _.max(Object.values(countByCost));

    deck.filter((card, i, self) => {
      Object.assign(cards, {
        [card.name]: {
          cost: card.cost,
          amount: (self.indexOf(card) !== i) ? 2 : 1
        }
      })
    });
    deck.map(v => v.type).forEach((c) => types[c] = (types[c] || 0) + 1);
    deck.map(v => v.cost).forEach((c) => {
     console.log(c);

      switch(c){
       case 0: return manaCurve[0] = ((manaCurve[0] || 0) +1);
       case 1: return manaCurve[1] = ((manaCurve[1] || 0) +1);
       case 2: return manaCurve[2] = ((manaCurve[2] || 0) +1);
       case 3: return manaCurve[3] = ((manaCurve[3] || 0) +1);
       case 4: return manaCurve[4] = ((manaCurve[4] || 0) +1);
       case 5: return manaCurve[5] = ((manaCurve[5] || 0) +1);
       case 6: return manaCurve[6] = ((manaCurve[6] || 0) +1);
       default: manaCurve[7] = (manaCurve[7] || 0) +1;
     }

    });
    simplifyDeck({cards, manaCurve, types, max});
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
    const toggleImg = (card) =>{
      let amount = deck.filter(c => c.cardId === card.cardId).length;
      if(amount > 0) return 'choosen';
    };


    if (cards < 1) {
      return <Loader/>;
    }
    else {
      return (
          allCards.filter(card => {
            return card.playerClass === _.upperFirst(params.class) || card.playerClass === "Neutral"
          })
              .map(card =>
                  <LazyLoad key={card.cardId} height={250} overflow throttle={200}>
                  <li onContextMenu={deck ? (e) => handleCardClick(e, card) : null}
                      onClick={deck ? (e) => handleCardClick(e, card) : null}>
                    {toggleCardAmountTooltip(card)}

                    <img className={`${toggleImg(card)} ${deck.length >= 30 ? "disabled" : ''} `}
                        src={card.img}
                        alt={card.name}/>

                  </li>
                  </LazyLoad>
              )
      )
    }
  };

  const handleKeyShortcuts = (e) => {
    let areDeckMechanicsActive = filters === false ? true : false;
    let areFiltersActive = filters === false ? true : false;

    if(e.button === 0 || e.ctrlKey) {
      toggleFilters(areFiltersActive)
    }
    // if(e.altKey){
    //   toggleDeckMechanics(areDeckMechanicsActive)
    // }

    // if(e.keyCode > 64 && e.keyCode <= 90){
    //   this.setState({
    //     cards: _.filter(Data, {name: e})
    //   })
    // }
  };

  const switchDecklistClasses = (param) =>{
    toggleImgReadyDecklist(param);
    !imgReadyDecklist
        ? document.getElementById('image').className += "active"
        : document.getElementById('image').className = "";
  };

  const handleDeckMechanicsToggle = () => {
    let areActive = deckMechanics === false ? true : false;
    toggleDeckMechanics(areActive);
  };

  const handleCopyDeckURLClick = () =>{
    copyDeckUrlToClipboard(summarizedDeck, updateURL);
  };

  const handleImgSaveClick = (e) =>{
    let target = e.currentTarget.id;
    switch(target){
      case 'save-img':
        let closeLoadingMessage = loading('Creating image...');
        captureDecklist('decklist-to-img', switchDecklistClasses, closeLoadingMessage);
        break;
      case 'cancel-img-save': return switchDecklistClasses(false);
    }
  };

  const handleOptionsClick = (e, icon) => {
    let isEditingToolActive = editingTool === false ? true : false;
    let isDecklistReadyForCapture = imgReadyDecklist === false ? true : false;
    switch (icon) {
      case 'link': return handleCopyDeckURLClick();
      case 'image': return switchDecklistClasses(isDecklistReadyForCapture);
      case 'download':
        !editingTool
            ? document.getElementById(e.currentTarget.id).className += "active"
            : document.getElementById(e.currentTarget.id).className = "";
        showDeckEditingTool(isEditingToolActive);
        deckSimplification();
        break;
    }
  };

  return (
      <div tabIndex="0" onKeyDown={(e) => handleKeyShortcuts(e)}
           className="container__page container__page--twoSided create-deck">
        <LeftContainer handleSidebarViewChange={(e) => handleKeyShortcuts(e)}
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
                       cards={allCards}
                       cardSet={cardSet}
                       imgReadyDecklist={imgReadyDecklist}
                       query={query}/>

        <RightContainer filtersView={filters}
                        query={query}
                        activeClass={params.class}
                        deck={deck}
                        simplifiedDeck={simplifiedDeck}
                        handleOptionsClick={handleOptionsClick}
                        handleImgSaveClick={handleImgSaveClick}
                        cards={listCards(query)}
                        editingTool={editingTool}
                        user={user}
                        imgReadyDecklist={imgReadyDecklist}/>
      </div>
  );
};

const mapStateToProps = (state, ownProps) =>{
  const {filters, editingTool, deckMechanics, imgReadyDecklist, deck, summarizedDeck, simplifiedDeck} = state.deckCreation;
  return {
    filters,
    editingTool,
    deckMechanics,
    imgReadyDecklist,
    deck,
    summarizedDeck,
    simplifiedDeck
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
    toggleImgReadyDecklist: (imgReadyDecklist) => dispatch({
      type: 'TOGGLE_IMG_READY_DECKLIST', imgReadyDecklist
    }),
    updateURL: (deckUrl) => dispatch ({
      type: 'UPDATE_URL', deckUrl
    }),
    editDeck: (deck) => dispatch({
      type: 'EDIT_DECK', deck, summarizedDeck: deck.map(c=>c.cardId)
    }),
    simplifyDeck: (simplifiedDeck) => dispatch({
      type: 'SIMPLIFY_DECK', simplifiedDeck
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);