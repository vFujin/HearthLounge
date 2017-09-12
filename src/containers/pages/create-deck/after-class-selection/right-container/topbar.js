import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';
import {
  createDeckFromDeckstringObj, encodeDeckstring,
  setDeckstringObj
} from "../../../../../utils/deck/deckstring/index";
import {imgCaptureBox, topbarOptions} from "./content-assets/utils/index";
import {
  editDeck,
  showDeckEditingTool, simplifyDeck, toggleImgReadyDecklist, toggleImportedDeckstringPopover,
  updateDeckstring
} from "../../../../../redux/actions/create-deck/create-deck.action";

class Topbar extends Component {

  switchDecklistClasses = (param) => {
    const {toggleImgReadyDecklist, imgReadyDecklist} = this.props;

    toggleImgReadyDecklist(param);
    !imgReadyDecklist
        ? document.getElementById('image').className += "active"
        : document.getElementById('image').className = "";
  };

  handleImgSaveClick = e => {
    imgCaptureBox(e, this.switchDecklistClasses);
  };

  handleDeckImport = () => {
    const {cards, importedDeckstring, editDeck, simplifyDeck} = this.props;
    const {allCards} = cards;

    createDeckFromDeckstringObj(allCards, importedDeckstring, deck => editDeck(deck), simplifiedDeck => simplifyDeck(simplifiedDeck));
  };

  handleOptionsClick = (event, icon) => {
    const {editingTool, deck, imgReadyDecklist, importedDeckstringPopover, showDeckEditingTool, simplifyDeck, toggleImportedDeckstringPopover} = this.props;
    topbarOptions(event, editingTool, deck, icon, imgReadyDecklist, this.handleCopyDeckStringClick, this.switchDecklistClasses, showDeckEditingTool, simplifyDeck, importedDeckstringPopover, toggleImportedDeckstringPopover);
  };

  handleCopyDeckStringClick = () => {
    const {updateDeckstring, deck, playerClass} = this.props;
    let deckstring = encodeDeckstring(setDeckstringObj(deck, playerClass));

    updateDeckstring(deckstring);
  };

  activeView = () =>{
    const {deck, deckstring, importedDeckstring, importedDeckstringPopover, filtersView, playerClass, query, imgReadyDecklist} = this.props;
    return filtersView
        ? <Filters deck={deck} playerClass={playerClass} query={query} filtersActive={filtersView}/>
        : <StatsOptions deck={deck}
                        deckstring={deckstring}
                        playerClass={playerClass}
                        importedDeckstring={importedDeckstring}
                        importedDeckstringPopover={importedDeckstringPopover}
                        handleImgSaveClick={this.handleImgSaveClick}
                        handleOptionsClick={this.handleOptionsClick}
                        handleInputChange={this.props.handleInputChange}
                        handleDeckImport={this.handleDeckImport}
                        filtersActive={filtersView}
                        imgReadyDecklist={imgReadyDecklist}/>
  };

  render() {
    return (
        <div className="topbar">
          {this.activeView()}
        </div>
    );
  }
}

const mapStateToProps = state =>{
  const {
    deckstring, importedDeckstring, importedDeckstringPopover, filtersView, imgReadyDecklist, editingTool, simplifiedDeck
  } = state.deckCreation;
  const {cards} = state.cards;
  return {
    deckstring,
    importedDeckstring,
    importedDeckstringPopover,
    filtersView,
    imgReadyDecklist,
    editingTool,
    cards,
    simplifiedDeck
  }
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

Topbar.propTypes = {
  deck: PropTypes.array.isRequired,
  filtersView: PropTypes.bool,
  playerClass: PropTypes.string,
  query: PropTypes.object
};