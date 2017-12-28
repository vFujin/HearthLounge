import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createDeckFromDeckstringObj, encodeDeckstring, setDeckstringObj }from "../../../../../utils/deck/deckstring/index";
import {imgCaptureBox, topbarOptions} from "./content-assets/utils/index";
import {
  editDeck,
  showDeckEditingTool, simplifyDeck, toggleImgReadyDecklist, toggleImportedDeckstringPopover,
  updateDeckstring
} from "../../../../../redux/actions/create-deck/create-deck.action";
import MapFunctionlessIcons from "./topbar-assets/map-functionless-icons";
import MapFunctionfulIcons from "./topbar-assets/map-functionful-icons";

class Topbar extends Component {

  switchDecklistClasses = (param) => {
    const {toggleImgReadyDecklist, deckCreation} = this.props;
    const {imgReadyDecklist} = deckCreation;

    toggleImgReadyDecklist(param);
    !imgReadyDecklist
        ? document.getElementById('image').className += "active"
        : document.getElementById('image').className = "";
  };

  handleImgSaveClick = e => {
    imgCaptureBox(e, this.switchDecklistClasses);
  };

  handleDeckImport = () => {
    const {cards, editDeck, simplifyDeck, deckCreation} = this.props;
    const {importedDeckstring} = deckCreation;
    const {allCards} = cards;

    createDeckFromDeckstringObj(allCards, importedDeckstring, deck => editDeck(deck), simplifiedDeck => simplifyDeck(simplifiedDeck));
  };

  handleCopyDeckStringClick = () => {
    const {playerClass, updateDeckstring, deckCreation} = this.props;
    const {deck} = deckCreation;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    updateDeckstring(deckstring);
  };

  handleOptionsClick = (event, icon) => {
    const {simplifyDeck, showDeckEditingTool, toggleImportedDeckstringPopover} = this.props;
    const {editingTool, deck, imgReadyDecklist, importedDeckstringPopover} = this.props.deckCreation;
    topbarOptions(event, editingTool, deck, icon, imgReadyDecklist, this.handleCopyDeckStringClick, this.switchDecklistClasses, showDeckEditingTool, simplifyDeck, importedDeckstringPopover, toggleImportedDeckstringPopover);
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
                                 handleInputChange={handleInputChange}
                                 handleDeckImport={this.handleDeckImport}
                                 importedDeckstring={importedDeckstring}
                                 importedDeckstringPopover={importedDeckstringPopover}
                                 deckstring={deckstring}
                                 handleOptionsClick={this.handleOptionsClick}
                                 handleImgSaveClick={this.handleImgSaveClick}
                                 imgReadyDecklist={imgReadyDecklist}/>
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
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    showDeckEditingTool: editingTool => dispatch(showDeckEditingTool(editingTool)),
    toggleImgReadyDecklist: decklist => dispatch(toggleImgReadyDecklist(decklist)),
    toggleImportedDeckstringPopover: deckstring => dispatch(toggleImportedDeckstringPopover(deckstring)),
    updateDeckstring: deckstring => dispatch(updateDeckstring(deckstring))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topbar);