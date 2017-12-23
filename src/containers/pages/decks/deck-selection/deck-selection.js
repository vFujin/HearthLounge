import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import _ from 'lodash';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {updateViews} from '../../../../firebase/decks/deck/update';
import {FETCH_DECKS_REQUEST} from "../../../../redux/decks/fetch-decks/types";
import {UPDATE_DECKS_REQUEST} from "../../../../redux/decks/update-decks/types";
import {FETCH_ACTIVE_DECK_SUCCESS} from "../../../../redux/deck/active-deck/types";

class DeckSelection extends Component {
  componentDidMount() {
    const {fetchDecks, updateDecks, decks, match} = this.props;
    const {playerClass} = match.params;
    if(decks.loading && match.path === "/decks") {
      playerClass ? fetchDecks(playerClass) : fetchDecks();
    }
    this.infiniteScroll(updateDecks);
  }

  handleFiltersClick = e =>{

  };

  handleDeckSnippetClick = (e) =>{
    let deckId = e.currentTarget.id;
    let deckObject = _.head(_.map(this.props.decks.all).filter(deckObject=>deckObject.deckId === deckId ? deckObject : null));
    this.props.updateActiveDeck(deckObject);
    // this.props.updateActiveDeckCopy(deckObject);
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
          <div className="container__page container__page--twoSided decks">
            <LeftContainer/>
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
    fetchDecks: () => dispatch({type: FETCH_DECKS_REQUEST}),
    updateDecks: () => dispatch({type: UPDATE_DECKS_REQUEST}),
    updateUserList: payload => dispatch({
      type: 'UPDATE_USER_LIST', payload
    }),
    updateActiveDeck: payload => dispatch({
      type: FETCH_ACTIVE_DECK_SUCCESS, payload
    }),
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

