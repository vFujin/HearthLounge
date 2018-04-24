import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createDeckFromDeckstringObj, encodeDeckstring, setDeckstringObj }from "../../../../../utils/deck/deckstring/index";
import {imgCaptureBox} from "./content-assets/utils/index";
import {
  editDeck,
  showDeckEditingTool, simplifyDeck, toggleImgReadyDecklist, toggleImportedDeckstringPopover,
  updateDeckstring, updatePlayerClass
} from "../../../../../redux/create-deck/actions/create-deck.action";
import MapFunctionlessIcons from "./topbar-assets/map-functionless-icons";
import MapFunctionfulIcons from "./topbar-assets/map-functionful-icons";
import {topbarOptions} from "./content-assets/utils";

class Topbar extends Component {

  toggleActiveClass = (e, state, siblingId) =>{
    const targetId = document.getElementById(e.currentTarget.id);
    if(siblingId){
      const sibling = document.getElementById(siblingId);
      const siblingClasslist = sibling.classList;
      if(siblingClasslist.contains("active")) {
        sibling.className = "";
      }
    }

    state
      ? targetId.className += "active"
      : targetId.className = "";
  };

  switchDecklistClasses = (param) => {
    const {toggleImgReadyDecklist} = this.props;
    toggleImgReadyDecklist(param);
  };

  handleImgSaveClick = e => {
    imgCaptureBox(e, this.switchDecklistClasses, "image");
  };

  handleDeckImport = () => {
    const {cards, editDeck, simplifyDeck, deckCreation, updatePlayerClass} = this.props;
    const {importedDeckstring} = deckCreation;
    const {allCards} = cards;

    createDeckFromDeckstringObj(
      allCards,
      importedDeckstring, 
      deck => editDeck(deck), simplifiedDeck => simplifyDeck(simplifiedDeck),
      playerClass => updatePlayerClass(playerClass)
    );
  };

  handleCopyDeckStringClick = () => {
    const {playerClass, updateDeckstring, deckCreation} = this.props;
    const {deck} = deckCreation;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    updateDeckstring(deckstring);
  };

  handleOptionsClick = (e, icon) => {
    topbarOptions(e, icon, this.props, this.handleCopyDeckStringClick, this.switchDecklistClasses, this.toggleActiveClass)
  };

  render() {
    const {handleInputChange, deckCreation} = this.props;
    const {deck, deckstring, importedDeckstring, importedDeckstringPopover, playerClass, imgReadyDecklist} = deckCreation;
    return (
        <div className="topbar">
          <div className="topbar__container topbar__grid topbar__grid--1-2-1 topbar__deckDetails">
            <MapFunctionlessIcons deck={deck} playerClass={playerClass} set="types" />
            <div className="deck-length"><p>{deck.length} / 30</p></div>
            <MapFunctionfulIcons set="options"
                                 imgReadyDecklist={imgReadyDecklist}
                                 importedDeckstring={importedDeckstring}
                                 importedDeckstringPopover={importedDeckstringPopover}
                                 deckstring={deckstring}
                                 handleInputChange={handleInputChange}
                                 handleDeckImport={this.handleDeckImport}
                                 handleOptionsClick={this.handleOptionsClick}
                                 handleImgSaveClick={this.handleImgSaveClick}/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  const {deckCreation} = state;
  const {cards} = state.cards;

  return {deckCreation, cards}
};

const mapDispatchToProps = dispatch => {
  return {
    editDeck: deck => dispatch(editDeck(deck)),
    updatePlayerClass: playerClass => dispatch(updatePlayerClass(playerClass)),
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    showDeckEditingTool: editingTool => dispatch(showDeckEditingTool(editingTool)),
    toggleImgReadyDecklist: decklist => dispatch(toggleImgReadyDecklist(decklist)),
    toggleImportedDeckstringPopover: deckstring => dispatch(toggleImportedDeckstringPopover(deckstring)),
    updateDeckstring: deckstring => dispatch(updateDeckstring(deckstring))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topbar);