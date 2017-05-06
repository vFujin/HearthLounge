import React from 'react';
import _ from 'lodash';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import Loader from '../../../../utils/loader';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/popover/style/css';
import {connect} from 'react-redux';
import message from 'antd/lib/message';
import domtoimage from 'dom-to-image';
import 'antd/lib/message/style/index.css';
import LazyLoad from 'react-lazyload';

const CreateDeckClassSelected = ({cards, cardSet, deck, deckMechanics, editDeck, editingTool, faction, filters, imgReadyDecklist, location, mechanics,
name, params, race, showDeckEditingTool, summarizedDeck, toggleDeckMechanics, toggleFilters, toggleImgReadyDecklist, type, user, updateURL}) => {

  const query = location.query;

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
          cards.filter(card => {
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

  const success = (msg) =>{
    message.success(msg);
  };
  const loading = (msg) =>{
    message.loading(msg);
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

  const handleDeckMechanicsToggle = () => {
    let areActive = deckMechanics === false ? true : false;
    toggleDeckMechanics(areActive);
  };

  const handleCopyDeckURLClick = (e) =>{
    const count = summarizedDeck => summarizedDeck.reduce((a,b)=> Object.assign(a, {[b]: (a[b] || 0) + 1}), {});
    let urlEndObj = count(summarizedDeck);
    let urlEnd = Object.keys(urlEndObj).map(k=>`${k}:${urlEndObj[k]}`).join(',');
    const successMsg = 'Successfully copied deck URL into clipboard!';
    updateURL(urlEnd);
    console.log(urlEnd);
    success(successMsg);
  };

  const handleImgSaveClick = (e) =>{
    let target = e.currentTarget.id;
    const imgCapture = (closeLoadingMessage) =>{

      let deckList = document.getElementById('decklist-to-img');

      return domtoimage.toJpeg(deckList, {bgcolor: '#E7E2DA'})
          .then(dataUrl=>{
            let link = document.createElement('a');
            link.download = 'deck.jpeg';
            link.href = dataUrl;
            link.click();
            toggleImgReadyDecklist(false);
            !imgReadyDecklist
                ? document.getElementById('image').className += "active"
                : document.getElementById('image').className = "";
            closeLoadingMessage();
            success('Image saved!')
          })
          .catch(error=>{
            closeLoadingMessage();
            error("Couldn't save image. Try again later.");
          });
    };
    switch(target){
      case 'save-img':
        let closeLoadingMessage = message.loading('Creaating img');
        imgCapture(closeLoadingMessage);
        break;
      case 'cancel-img-save':
        !imgReadyDecklist
            ? document.getElementById('image').className += "active"
            : document.getElementById('image').className = "";
        toggleImgReadyDecklist(false);
        break;
    }
  };

  const handleOptionsClick = (e, icon) => {
    let isEditingToolActive = editingTool === false ? true : false;
    let isDecklistReadyForCapture = imgReadyDecklist === false ? true : false;
    switch (icon) {
      case 'link': return handleCopyDeckURLClick();
      case 'image':
        !imgReadyDecklist
            ? document.getElementById(e.currentTarget.id).className += "active"
            : document.getElementById(e.currentTarget.id).className = "";
        toggleImgReadyDecklist(isDecklistReadyForCapture);
        break;
      case 'download':
        !editingTool
            ? document.getElementById(e.currentTarget.id).className += "active"
            : document.getElementById(e.currentTarget.id).className = "";
        showDeckEditingTool(isEditingToolActive);
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
                       cards={cards}
                       cardSet={cardSet}
                       imgReadyDecklist={imgReadyDecklist}
                       query={query}/>

        <RightContainer filtersView={filters}
                        query={query}
                        activeClass={params.class}
                        deck={deck}
                        summarizedDeck={summarizedDeck}
                        handleOptionsClick={handleOptionsClick}
                        handleImgSaveClick={handleImgSaveClick}
                        cards={listCards(query)}
                        editingTool={editingTool}
                        user={user}
                        imgReadyDecklist={imgReadyDecklist}/>
      </div>
  );
};

const mapStateToProps = (state) =>{
  const {filters, editingTool, deckMechanics, imgReadyDecklist, deck, summarizedDeck} = state.deckCreation;
  return {
    filters,
    editingTool,
    deckMechanics,
    imgReadyDecklist,
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
    toggleImgReadyDecklist: (imgReadyDecklist) => dispatch({
      type: 'TOGGLE_IMG_READY_DECKLIST', imgReadyDecklist
    }),
    updateURL: (deckUrl) => dispatch ({
      type: 'UPDATE_URL', deckUrl
    }),
    editDeck: (deck) => dispatch({
      type: 'EDIT_DECK', deck, summarizedDeck: deck.map(c=>c.cardId)
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);