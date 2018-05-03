import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import RightContainer from './right-container/right-container';
import {updateViews} from '../../../../firebase/decks/deck/update';
import {UPDATE_DECKS_REQUEST} from "../../../../redux/decks/update-decks/types";
import {fetchDecksRequest} from "../../../../redux/decks/fetch-decks/actions";
import {fetchActiveDeckSuccess} from "../../../../redux/deck/active-deck/actions";
import './deck-selection-styles.css';

class DeckSelection extends Component {
  componentDidMount() {
    document.title = "Decks";
    const {fetchDecks, updateDecks, decks, match} = this.props;
    const {playerClass} = match.params;
    if(decks.loading && match.path === "/decks") {
      playerClass ? fetchDecks(playerClass) : fetchDecks();
    }
    this.infiniteScroll(updateDecks);
  }

  handleDeckSnippetClick = (e) =>{
    let deckId = e.currentTarget.id;
    let deckObject = this.props.decks.all.find(deckObject=>deckObject.deckId === deckId);
    this.props.updateActiveDeck(deckObject);
    updateViews(deckId);
  };

  infiniteScroll = (updateDecklist) => {
    const el = document.querySelector('.table-scroll');
    if (el) {
      el.addEventListener("scroll", function () {
            if (el.clientHeight === el.scrollHeight - el.scrollTop) {
              updateDecklist()
            }
          }
      )
    }
  };

  render() {
    const {decks, adventuresToggled, activeAdventure, activeMode, activeClass} = this.props;
    return (
          <div className="container__page container__page--oneSided decks">
            {/*<LeftContainer/>*/}
            <RightContainer decks={decks}
                            adventuresToggled={adventuresToggled}
                            activeMode={activeMode}
                            activeAdventure={activeAdventure}
                            activeClass={activeClass}
                            handleFiltersClick={this.handleFiltersClick}
                            handleDeckSnippetClick={(e) => this.handleDeckSnippetClick(e)}/>

          </div>
      );

  };
}

const mapStateToProps = (state) =>{
  const {decks, adventuresToggled, activeAdventure, activeMode, activeClass} = state.decks;
  const {activeDeck} = state.deckView;
  const {activeUser} = state.users;
  return {decks, activeUser, activeDeck, adventuresToggled, activeAdventure, activeMode, activeClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: () => dispatch(fetchDecksRequest()),
    updateDecks: () => dispatch({type: UPDATE_DECKS_REQUEST}),
    updateActiveDeck: payload => dispatch(fetchActiveDeckSuccess(payload)),
    toggleAdventureFilters: payload => dispatch({
      type: 'TOGGLE_ADVENTURE_FILTERS', payload
    }),
    updateModeFilter: payload => dispatch({
      type: 'UPDATE_MODE_FILTER', payload
    }),
    updateAdventureFilter: payload => dispatch({
      type: 'UPDATE_ADVENTURE_FILTER', payload
    }),
    updateClassFilter: payload => dispatch({
      type: 'UPDATE_CLASS_FILTER', payload
    })

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelection);

