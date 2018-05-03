import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import DeckMobile from './deck-mobile/deck-mobile';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {RESET_ACTIVE_DECK} from "../../../../redux/deck/active-deck/types";
import NotFound from "../../../../components/not-found/not-found";
import {fetchActiveDeckRequest} from "../../../../redux/deck/active-deck/actions";
import {resetActiveDeckCopy, updateActiveDeckCopy} from "../../../../redux/deck/active-deck-copy/actions";
import {resetShortenedUserDetails} from "../../../../redux/user/shortened-details/actions";
import {resetActiveDeckComments} from "../../../../redux/deck/comments/fetch-comments/actions";
import {resetDeckAuthor} from "../../../../redux/deck/deck-author/actions";
import {toggleDeckEditView} from "../../../../redux/deck/tools/actions";

class Deck extends Component{
  componentDidMount() {
    const {activeDeck, fetchDeck, match, updateActiveDeckCopy} = this.props;
    const {deckId, deckTitle} = match.params;
    document.title = _.startCase(deckTitle) || "Deck";

    if (!activeDeck.loading && !activeDeck.deckId) {
      fetchDeck(deckId);
    } else {
      updateActiveDeckCopy(activeDeck);
    }
  }

  componentWillUnmount(){
    const {resetActiveDeck, resetActiveDeckCopy, resetDeckAuthor, resetActiveDeckComments, resetShortenedUserDetails, toggleDeckEditView} = this.props;
    resetActiveDeck();
    resetActiveDeckCopy();
    resetDeckAuthor();
    resetActiveDeckComments();
    resetShortenedUserDetails();
    toggleDeckEditView(false)
  }

  render() {
    const {activeDeck, match, windowWidth} = this.props;
    if (activeDeck.err) {
      return <NotFound page={match.params.deckId} redirect="decks"/>
    }

    return windowWidth <= 1365
      ? <DeckMobile params={match.params}/>
      : (
        <div className="container__page container__page--twoSided deck">
          <LeftContainer/>
          <RightContainer params={match.params}/>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  const {activeDeck} = state.deckView;
  const { windowWidth } = state.app.windowSize;

  return {activeDeck, windowWidth};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch(fetchActiveDeckRequest(payload)),
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
    resetActiveDeck: () => dispatch({type: RESET_ACTIVE_DECK}),
    resetActiveDeckCopy: () => dispatch(resetActiveDeckCopy()),
    resetDeckAuthor: () => dispatch(resetDeckAuthor()),
    resetActiveDeckComments: () => dispatch(resetActiveDeckComments()),
    resetShortenedUserDetails: () => dispatch(resetShortenedUserDetails()),
    toggleDeckEditView: payload => dispatch(toggleDeckEditView(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);