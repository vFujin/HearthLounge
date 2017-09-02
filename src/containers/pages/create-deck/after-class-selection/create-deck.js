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

  handleDeckFiltersToggle = () =>{
    const {toggleFilters, filters} = this.props;
    toggleFilters(!filters);
  };

  handleCopyDeckStringClick = () => {
    const {updateDeckstring, deck, params} = this.props;
    const playerClass = params.class;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    updateDeckstring(deckstring);
  };

  handleImgSaveClick = e => {
    imgCaptureBox(e, this.switchDecklistClasses);
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
      const {allCards} = cards;

      if(cardSearchValue !== '') {
        return filterCards(allCards.filter(card => (card.playerClass === 'Neutral') || card.playerClass === _.startCase(params.class) ).filter(card => {
          return _.toLower(card.name).includes(_.toLower(cardSearchValue))
        }).slice(0, 30));
      } else {
        filterCards(null);
      }
  }, 300);

  handleDeckImport = () => {
    const {cards, importedDeckstring, editDeck, simplifyDeck} = this.props;
    const {allCards} = cards;

    createDeckFromDeckstringObj(allCards, importedDeckstring, deck => editDeck(deck), simplifiedDeck => simplifyDeck(simplifiedDeck));
  };

  handleOptionsClick = (event, icon) => {
    const {editingTool, deck, imgReadyDecklist, importedDeckstringPopover, showDeckEditingTool, simplifyDeck, toggleImportedDeckstringPopover} = this.props;
    topbarOptions(event, editingTool, deck, icon, imgReadyDecklist, this.handleCopyDeckStringClick, this.switchDecklistClasses, showDeckEditingTool, simplifyDeck, importedDeckstringPopover, toggleImportedDeckstringPopover);
  };

  render() {
    const {authenticated, cards, deck, patch, deckMechanics, editingTool, filters, udpateCardSearchValue, cardSearchValue, searchBox, filteredCards, filtersQuery, importedDeckstring, importedDeckstringPopover, imgReadyDecklist, location, params, simplifiedDeck, user, updateCurrentCardsLoaded, currentCardsLoaded} = this.props;
    const {allCards, cardSet} = cards;
    const {query} = location;
    const playerClass = params.class;
    const filteredByClass = allCards.filter(card => card.playerClass === _.startCase(playerClass) || card.playerClass === 'Neutral');
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

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
                         cardSet={cardSet}
                         imgReadyDecklist={imgReadyDecklist}
                         query={query}/>

          <RightContainer filtersView={filters}
                          authenticated={authenticated}
                          query={query}
                          playerClass={playerClass}
                          deckstring={deckstring}
                          deck={deck}
                          importedDeckstring={importedDeckstring}
                          importedDeckstringPopover={importedDeckstringPopover}
                          simplifiedDeck={simplifiedDeck}
                          handleCardClick={this.handleCardClick}
                          handleOptionsClick={this.handleOptionsClick}
                          handleImgSaveClick={this.handleImgSaveClick}
                          handleInputChange={this.handleInputChange}
                          handleDeckImport={this.handleDeckImport}
                          handleCardSearch={this.handleCardSearch}
                          allCards={filteredCards || filteredByClass}
                          cardSearchValue={cardSearchValue}
                          udpateCardSearchValue={udpateCardSearchValue}
                          patch={patch}
                          editingTool={editingTool}
                          user={user}
                          imgReadyDecklist={imgReadyDecklist}
                          filtersQuery={filtersQuery}
                          searchBox={searchBox}
                          updateCurrentCardsLoaded={updateCurrentCardsLoaded}
                          currentCardsLoaded={currentCardsLoaded}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {filters, editingTool, deckMechanics, imgReadyDecklist, importedDeckstring, filteredCards, searchBox, cardSearchValue, deck, simplifiedDeck, currentCardsLoaded, filtersQuery, importedDeckstringPopover} = state.deckCreation;
  return {
    filters,
    editingTool,
    deckMechanics,
    imgReadyDecklist,
    deck,
    simplifiedDeck,
    currentCardsLoaded,
    filtersQuery,
    importedDeckstring,
    importedDeckstringPopover,
    searchBox,
    cardSearchValue,
    filteredCards
  };
};

const mapDispatchToProps = (dispatch) => {
  const {
    toggleFilters, showDeckEditingTool, toggleDeckMechanics,
    toggleImgReadyDecklist, editDeck, updateDeckstring, simplifyDeck, updateCurrentCardsLoaded, updateImportedDeckstring, filterCards,
    toggleSearchBox, updateCardSearchValue, toggleImportedDeckstringPopover
  } = deckCreationActions;

  return {
    toggleFilters: filters => dispatch(toggleFilters(filters)),
    showDeckEditingTool: editingTool => dispatch(showDeckEditingTool(editingTool)),
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
    toggleImgReadyDecklist: imgReadyDecklist => dispatch(toggleImgReadyDecklist(imgReadyDecklist)),
    editDeck: deck => dispatch(editDeck(deck)),
    updateDeckstring: deckstring => dispatch(updateDeckstring(deckstring)),
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    updateCurrentCardsLoaded: currentCardsLoaded => dispatch(updateCurrentCardsLoaded(currentCardsLoaded)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
    toggleImportedDeckstringPopover: importedDeckstringPopover => dispatch(toggleImportedDeckstringPopover(importedDeckstringPopover)),
    toggleSearchBox: searchBox => dispatch(toggleSearchBox(searchBox)),
    updateCardSearchValue: cardSearchValue => dispatch(updateCardSearchValue(cardSearchValue)),
    filterCards: filteredCards => dispatch(filterCards(filteredCards))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);