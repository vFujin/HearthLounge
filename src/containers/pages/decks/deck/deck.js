import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {getUser} from '../../../../firebase/user/read';
import {rateDeck} from '../../../../firebase/decks/deck/read/lazyload-decks';
import {udpateDeckRating} from '../../../../firebase/decks/deck/update';
import {alertUnload} from "./utils/alert-unload";
import {FETCH_ACTIVE_DECK_REQUEST, RESET_ACTIVE_DECK} from "../../../../redux/deck/active-deck/types";
import {FETCH_DECK_AUTHOR_REQUEST} from "../../../../redux/deck/deck-author/types";
import Loader from "../../../../components/loader";
import {CANCEL_ACTIVE_DECK_COPY_UPDATE, UPDATE_ACTIVE_DECK_COPY} from "../../../../redux/deck/active-deck-copy/types";
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../redux/deck/tools/types";

class Deck extends Component{
  componentDidMount(){
    const {activeDeck, fetchDeck, params} = this.props;
    const {deckId} = params;
    console.log(activeDeck);
    if(activeDeck.loading){
      fetchDeck(deckId)
    }
  }

  componentWillUnmount(){
    const {resetActiveDeck} = this.props;
    resetActiveDeck();
  }

  handleDeckVotingClick = (e) =>{
    const {activeUser, activeDeck, updateDeckRating} = this.props;
    let vote = e.currentTarget.id;
    const {deckId} = activeDeck;
    const {uid} = activeUser;

    udpateDeckRating(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
  };


  handleCardRemovalClick = (e) =>{
    const {editingDecklist} = this.props;
    let cards = editingDecklist.cards;
    let manaCurve = editingDecklist.manaCurve;
    let target = e.currentTarget;
    let targetDataset = target.dataset;
    let cardName = target.id;
    let cardCost = targetDataset.cost;

    let decklistAfterCardRemoval = Object.keys(cards).reduce((acc, card) => {
      const currCard = cards[card];
      if(card !== cardName) {
        acc[card] = currCard
      }
      return acc;
    }, {});

    //need amount of card here
    let manacurveAfterCostRemoval = manaCurve.map((c, i) => i == cardCost ? c-1 : c);
    let max = _.max(manacurveAfterCostRemoval);

    this.props.fetchDecks({
        cards: decklistAfterCardRemoval,
        manaCurve: manacurveAfterCostRemoval,
        max
      //add type and rarity
    });
  };

  render() {
    const {activeDeck, activeDeckCopy, activeUser, deckEditView, patch, params, deckAuthor, updateActiveDeckCopy} = this.props;
    if(activeDeck.loading){
      return <Loader/>
    } else {
      return (
          <div className="container__page container__page--twoSided deck">
            <LeftContainer activeDeck={activeDeck}
                           activeDeckCopy={activeDeckCopy}
                           updateActiveDeckCopy={updateActiveDeckCopy}
                           deckEditView={deckEditView}
                           cards={this.props.cards}
                           handleCardRemovalClick={this.handleCardRemovalClick}/>
            <RightContainer activeDeck={activeDeck}
                            deckEditView={deckEditView}
                            params={params}
                            patch={patch}
                            deckAuthor={deckAuthor}
                            activeUser={activeUser}
                            handleDeckVotingClick={this.handleDeckVotingClick}/>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const {activeDeck, activeDeckCopy, deckAuthor, tools} = state.deckView;
  const {deckEditView} = tools;
  const {cards} = state.cards;

  return {activeDeck, activeDeckCopy, deckAuthor, cards, deckEditView};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch({type: FETCH_ACTIVE_DECK_REQUEST, payload}),
    fetchDeckAuthor: payload => dispatch({type: FETCH_DECK_AUTHOR_REQUEST, payload}),
    updateActiveDeckCopy: payload => dispatch({type: UPDATE_ACTIVE_DECK_COPY, payload}),
    cancelDeckUpdate: () => dispatch({type: CANCEL_ACTIVE_DECK_COPY_UPDATE}),
    resetActiveDeck: () => dispatch({type: RESET_ACTIVE_DECK})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

Deck.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object,
  updateDeckRating: PropTypes.func,
};