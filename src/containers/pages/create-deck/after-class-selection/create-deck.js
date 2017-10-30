import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import {uniqueCards} from '../../../../utils/deck/calculate'
import {setDeckstringObj, encodeDeckstring} from '../../../../utils/deck/deckstring';
import {topbarOptions, imgCaptureBox, updateDeck} from "./right-container/content-assets/utils";
import {scToggleDeckFilters, scToggleDeckMechanics} from "./right-container/content-assets/utils/shortcuts";
import * as deckCreationActions from "../../../../redux/actions/create-deck/create-deck.action";
import {createDeckFromDeckstringObj} from "../../../../utils/deck/deckstring/index";
import {updateImportedDeckstring} from "../../../../redux/actions/create-deck/create-deck.action";
import {
  scClearFilters, scSaveDeck, scSubmitFilteredCard,
  scToggleSearchBox
} from "./right-container/content-assets/utils/shortcuts/index";
import {resetFocus} from "./right-container/content-assets/utils/reset-focus";
import Loader from "../../../../components/loaders/loader";
import {updateCardSearchValue} from "../../../../redux/actions/create-deck/create-deck.action";
import {toggleImgReadyDecklist} from "../../../../redux/actions/create-deck/create-deck.action";
import {toggleImportedDeckstringPopover} from "../../../../redux/actions/create-deck/create-deck.action";

class CreateDeckClassSelected extends PureComponent {

  componentDidMount(){
    resetFocus();
  }

  componentWillUnmount() {
    const {updateCurrentCardsLoaded, toggleFilters, filterCards, toggleDeckMechanics, toggleImgReadyDecklist, toggleImportedDeckstringPopover, toggleSearchBox, updateCardSearchValue} = this.props;
    updateCurrentCardsLoaded(35);
    toggleFilters(false);
    toggleDeckMechanics(false);
    toggleImgReadyDecklist(false);
    toggleImportedDeckstringPopover(false);
    toggleSearchBox(false);
    updateCardSearchValue('');
    filterCards(null);
  }

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;
    e.preventDefault();

    updateDeck(e, card, deck, editDeck);
  };

  handleKeyShortcuts = (e) => {
    const {toggleFilters, toggleDeckMechanics, toggleSearchBox, updateCardSearchValue, filterCards, filters, deckMechanics, searchBox, cardSearchValue, filteredCards, showDeckEditingTool, editingTool} = this.props;

    scToggleDeckFilters(e, toggleFilters, filters);
    scToggleDeckMechanics(e, toggleDeckMechanics, deckMechanics);
    scToggleSearchBox(e, toggleSearchBox, searchBox);
    scClearFilters(e, toggleFilters, toggleDeckMechanics, toggleSearchBox, filterCards, updateCardSearchValue);
    scSubmitFilteredCard(e, searchBox, cardSearchValue, filteredCards, toggleSearchBox, updateCardSearchValue);
    scSaveDeck(e, showDeckEditingTool, editingTool);
  };

  handleDeckMechanicsToggle = () => {
    const {toggleDeckMechanics, deckMechanics} = this.props;
    toggleDeckMechanics(!deckMechanics);
  };

  handleDeckFiltersToggle = () =>{
    const {toggleFilters, filters} = this.props;
    toggleFilters(!filters);
  };

  handleInputChange = e =>{
    const {updateImportedDeckstring, updateCardSearchValue} = this.props;
    let target = e.target.id;
    let value = e.currentTarget.dataset.value || e.target.value;

    if(target === 'deckstring-popover'){
      updateImportedDeckstring(value);
    } else {
      updateCardSearchValue(value);
      this.handleCardSearch();
    }
  };

  handleCardSearch = _.debounce(() => {
      const {filterCards, cards, params, cardSearchValue} = this.props;
      const {allCards, loading} = cards;

      if(cardSearchValue !== '') {
        return filterCards(allCards.filter(card => (card.playerClass === 'Neutral') || card.playerClass === _.startCase(params.class) ).filter(card => {
          return _.toLower(card.name).includes(_.toLower(cardSearchValue))
        }).slice(0, 30));
      } else {
        filterCards(null);
      }
  }, 300);

  render() {
    const {authenticated, cards, deck, patch, deckstring, filteredCards, deckMechanics, editingTool, filters, udpateCardSearchValue, cardSearchValue, searchBox, filtersQuery, imgReadyDecklist, location, params, simplifiedDeck, user, updateCurrentCardsLoaded, currentCardsLoaded} = this.props;
    const {query} = location;
    const playerClass = params.class;
    return (
        <div tabIndex="0" onKeyDown={(e) => this.handleKeyShortcuts(e)}
             className="container__page container__page--twoSided create-deck">

          <LeftContainer handleSidebarViewChange={this.handleDeckFiltersToggle}
                         filtersView={filters}
                         countCards={(e) => uniqueCards(deck, e)}
                         deck={deck}
                         deckDetails={deckMechanics}
                         handleDeckMechanicsToggle={this.handleDeckMechanicsToggle}
                         playerClass={playerClass}
                         cards={cards}
                         imgReadyDecklist={imgReadyDecklist}
                         query={query}/>

          <RightContainer authenticated={authenticated}
                          query={query}
                          playerClass={playerClass}
                          deck={deck}
                          simplifiedDeck={simplifiedDeck}
                          handleCardClick={this.handleCardClick}
                          handleInputChange={this.handleInputChange}
                          handleCardSearch={this.handleCardSearch}
                          cards={cards}
                          filteredCards={filteredCards}
                          cardSearchValue={cardSearchValue}
                          udpateCardSearchValue={udpateCardSearchValue}
                          patch={patch}
                          deckstring={deckstring}
                          editingTool={editingTool}
                          user={user}
                          filtersQuery={filtersQuery}
                          searchBox={searchBox}
                          updateCurrentCardsLoaded={updateCurrentCardsLoaded}
                          currentCardsLoaded={currentCardsLoaded}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {
    filters, deckMechanics, filteredCards, searchBox, deckstring, editingTool, cardSearchValue, deck, simplifiedDeck,
    currentCardsLoaded, filtersQuery, imgReadyDecklist
  } = state.deckCreation;
  const {cards} = state.cards;
  return {
    cards,
    filters,
    deckMechanics,
    deck,
    simplifiedDeck,
    currentCardsLoaded,
    filtersQuery,
    searchBox,
    cardSearchValue,
    filteredCards,
    editingTool,
    imgReadyDecklist,
    deckstring
  };
};

const mapDispatchToProps = (dispatch) => {
  const {
    toggleFilters, toggleDeckMechanics,
    editDeck, updateCurrentCardsLoaded, updateImportedDeckstring, filterCards,
    toggleSearchBox
  } = deckCreationActions;

  return {
    toggleFilters: filters => dispatch(toggleFilters(filters)),
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
    editDeck: deck => dispatch(editDeck(deck)),
    toggleImgReadyDecklist: decklist => dispatch(toggleImgReadyDecklist(decklist)),
    toggleImportedDeckstringPopover: deckstring => dispatch(toggleImportedDeckstringPopover(deckstring)),
    updateCardSearchValue: card => dispatch(updateCardSearchValue(card)),
    updateCurrentCardsLoaded: currentCardsLoaded => dispatch(updateCurrentCardsLoaded(currentCardsLoaded)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
    toggleSearchBox: searchBox => dispatch(toggleSearchBox(searchBox)),
    filterCards: filteredCards => dispatch(filterCards(filteredCards))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);