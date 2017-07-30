import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import {uniqueCards} from '../../../../utils/deck/calculate'
import {setDeckstringObj, encodeDeckstring} from '../../../../utils/deck/deckstring';
import {topbarOptions, imgCaptureBox, updateDeck} from "./right-container/content-assets/utils";
import {scToggleDeckFilters, scToggleDeckMechanics} from "./right-container/content-assets/utils/shortcuts";

class CreateDeckClassSelected extends PureComponent {

  componentWillUnmount() {
    const {updateCurrentCardsLoaded} = this.props;
    updateCurrentCardsLoaded(35);
  }

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;

    e.preventDefault();
    updateDeck(e, card, deck, editDeck);
  };

  handleKeyShortcuts = (e) => {
    const {toggleFilters, toggleDeckMechanics, filters, deckMechanics} = this.props;
    scToggleDeckFilters(e, toggleFilters, filters);
    scToggleDeckMechanics(e, toggleDeckMechanics, deckMechanics);


    // for input
    // if(e.keyCode > 64 && e.keyCode <= 90){
    //   this.setState({
    //     cards: _.filter(Data, {name: e})
    //   })
    // }
  };

  switchDecklistClasses = (param) => {
    const {toggleImgReadyDecklist, imgReadyDecklist} = this.props;

    toggleImgReadyDecklist(param);
    !imgReadyDecklist
        ? document.getElementById('image').className += "active"
        : document.getElementById('image').className = "";
  };

  handleDeckMechanicsToggle = () => {
    const {toggleDeckMechanics, deckMechanics} = this.props;
    toggleDeckMechanics(!deckMechanics);
  };

  handleCopyDeckStringClick = () => {
    const {updateDeckstring, deck, params} = this.props;
    const playerClass = params.class;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    updateDeckstring(deckstring);
  };

  handleImgSaveClick = (event) => {
    imgCaptureBox(event, this.switchDecklistClasses);
  };

  handleOptionsClick = (event, icon) => {
    const {editingTool, deck, imgReadyDecklist, showDeckEditingTool, simplifyDeck} = this.props;
    topbarOptions(event, editingTool, deck, icon, imgReadyDecklist, this.handleCopyDeckStringClick, this.switchDecklistClasses, showDeckEditingTool, simplifyDeck);
  };

  render() {
    const {authenticated, cards, deck, patch, deckMechanics, editingTool, filters, filtersQuery, imgReadyDecklist, location, params, simplifiedDeck, user, updateCurrentCardsLoaded, currentCardsLoaded} = this.props;
    const {allCards, cardSet} = cards;
    const {query} = location;
    const playerClass = params.class;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    return (
        <div tabIndex="0" onKeyDown={(e) => this.handleKeyShortcuts(e)}
             className="container__page container__page--twoSided create-deck">
          <LeftContainer handleSidebarViewChange={this.handleKeyShortcuts}
                         filtersView={filters}
                         countCards={(e) => uniqueCards(deck, e)}
                         deck={deck}
                         deckDetails={deckMechanics}
                         handleDeckMechanicsToggle={this.handleDeckMechanicsToggle}
                         params={params}
                         cards={cards}
                         cardSet={cardSet}
                         imgReadyDecklist={imgReadyDecklist}
                         query={query}/>

          <RightContainer filtersView={filters}
                          authenticated={authenticated}
                          query={query}
                          activeClass={params.class}
                          deckstring={deckstring}
                          deck={deck}
                          simplifiedDeck={simplifiedDeck}
                          handleCardClick={this.handleCardClick}
                          handleOptionsClick={this.handleOptionsClick}
                          handleImgSaveClick={this.handleImgSaveClick}
                          allCards={allCards}
                          patch={patch}
                          editingTool={editingTool}
                          user={user}
                          imgReadyDecklist={imgReadyDecklist}
                          filtersQuery={filtersQuery}
                          updateCurrentCardsLoaded={updateCurrentCardsLoaded}
                          currentCardsLoaded={currentCardsLoaded}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {filters, editingTool, deckMechanics, imgReadyDecklist, deck, simplifiedDeck, currentCardsLoaded} = state.deckCreation;
  const {filtersQuery} = state.deckCreationFilters;
  return {
    filters,
    editingTool,
    deckMechanics,
    imgReadyDecklist,
    deck,
    simplifiedDeck,
    currentCardsLoaded,
    filtersQuery
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
      type: 'EDIT_DECK', deck
    }),
    updateDeckstring: (deckstring) => dispatch({
      type: 'UPDATE_DECKSTRING', deckstring
    }),
    simplifyDeck: (simplifiedDeck) => dispatch({
      type: 'SIMPLIFY_DECK', simplifiedDeck
    }),
    updateCurrentCardsLoaded: (currentCardsLoaded) => dispatch({
      type: 'UPDATE_CURRENT_CARDS_LOADED', currentCardsLoaded
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);