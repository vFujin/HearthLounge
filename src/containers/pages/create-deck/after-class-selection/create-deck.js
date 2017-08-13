import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import {uniqueCards} from '../../../../utils/deck/calculate'
import {setDeckstringObj, encodeDeckstring} from '../../../../utils/deck/deckstring';
import {topbarOptions, imgCaptureBox, updateDeck} from "./right-container/content-assets/utils";
import {scToggleDeckFilters, scToggleDeckMechanics} from "./right-container/content-assets/utils/shortcuts";
import * as deckCreationActions from "../../../../redux/actions/create-deck/create-deck";
import {createDeckFromDeckstringObj} from "../../../../utils/deck/deckstring/index";
import {updateImportedDeckstring} from "../../../../redux/actions/create-deck/create-deck";

class CreateDeckClassSelected extends PureComponent {

  componentWillUnmount() {
    const {updateCurrentCardsLoaded, toggleFilters, toggleDeckMechanics, toggleImgReadyDecklist, toggleImportedDeckstringPopover} = this.props;
    updateCurrentCardsLoaded(35);
    toggleFilters(false);
    toggleDeckMechanics(false);
    toggleImgReadyDecklist(false);
    toggleImportedDeckstringPopover(false);
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

  handleImgSaveClick = e => {
    imgCaptureBox(e, this.switchDecklistClasses);
  };

  handleInputChange = e =>{
    const {updateImportedDeckstring} = this.props;
    let deckstring = e.target.value;

    updateImportedDeckstring(deckstring);
  };

  handleDeckImport = () => {
    const {cards, importedDeckstring, editDeck} = this.props;
    const {allCards} = cards;

    createDeckFromDeckstringObj(allCards, importedDeckstring, deck => editDeck(deck));
  };

  handleOptionsClick = (event, icon) => {
    const {editingTool, deck, imgReadyDecklist, importedDeckstringPopover, showDeckEditingTool, simplifyDeck, toggleImportedDeckstringPopover} = this.props;
    topbarOptions(event, editingTool, deck, icon, imgReadyDecklist, this.handleCopyDeckStringClick, this.switchDecklistClasses, showDeckEditingTool, simplifyDeck, importedDeckstringPopover, toggleImportedDeckstringPopover);
  };

  render() {
    const {authenticated, cards, deck, patch, deckMechanics, editingTool, filters, filtersQuery, importedDeckstring, importedDeckstringPopover, imgReadyDecklist, location, params, simplifiedDeck, user, updateCurrentCardsLoaded, currentCardsLoaded} = this.props;
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
  const {filters, editingTool, deckMechanics, imgReadyDecklist, importedDeckstring, deck, simplifiedDeck, currentCardsLoaded, filtersQuery, importedDeckstringPopover} = state.deckCreation;
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
    importedDeckstringPopover
  };
};

const mapDispatchToProps = (dispatch) => {
  const {
    toggleFilters, showDeckEditingTool, toggleDeckMechanics,
    toggleImgReadyDecklist, updateURL, editDeck, updateDeckstring, simplifyDeck, updateCurrentCardsLoaded, updateImportedDeckstring, toggleImportedDeckstringPopover
  } = deckCreationActions;

  return {
    toggleFilters: filters => dispatch(toggleFilters(filters)),
    showDeckEditingTool: editingTool => dispatch(showDeckEditingTool(editingTool)),
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
    toggleImgReadyDecklist: imgReadyDecklist => dispatch(toggleImgReadyDecklist(imgReadyDecklist)),
    updateURL: deckUrl => dispatch(updateURL(deckUrl)),
    editDeck: deck => dispatch(editDeck(deck)),
    updateDeckstring: deckstring => dispatch(updateDeckstring(deckstring)),
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    updateCurrentCardsLoaded: currentCardsLoaded => dispatch(updateCurrentCardsLoaded(currentCardsLoaded)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
    toggleImportedDeckstringPopover: importedDeckstringPopover => dispatch(toggleImportedDeckstringPopover(importedDeckstringPopover))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);