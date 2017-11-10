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
import Loader from "../../../../components/loaders/loader";
import {CANCEL_ACTIVE_DECK_COPY_UPDATE, UPDATE_ACTIVE_DECK_COPY} from "../../../../redux/deck/active-deck-copy/types";
import {TOGGLE_DECK_EDIT_VIEW} from "../../../../redux/deck/tools/types";
import {updateDeck} from "../../create-deck/after-class-selection/right-container/content-assets/utils/index";

class Deck extends Component{
  componentDidMount() {
    const {activeDeck, fetchDeck, params, updateActiveDeckCopy} = this.props;
    const {deckId} = params;

    if (activeDeck.loading) {
      fetchDeck(deckId)
    } else {
      updateActiveDeckCopy(activeDeck);
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

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;
    e.preventDefault();

    updateDeck(e, card, deck, editDeck);
  };


  handleCardRemovalClick = (e) =>{
    const {activeDeckCopy} = this.props;
    let cards = activeDeckCopy.cards;
    let manaCurve = activeDeckCopy.manaCurve;
    let target = e.currentTarget;
    let targetDataset = target.dataset;
    let cardName = target.id;
    let cardCost = targetDataset.cost;
    let length = activeDeckCopy.length;

    let decklistAfterCardRemoval = Object.keys(cards).reduce((acc, card) => {
      const currCard = cards[card];
      if(card !== cardName) {
        acc[card] = currCard;
      }
      return acc;
    }, {});
    //need amount of card here
    let manacurveAfterCostRemoval = _.map(manaCurve).map((c, i) => i == cardCost ? c-1 : c);
    let max = _.max(manacurveAfterCostRemoval);
    this.props.updateActiveDeckCopy({
      deck: {
        cards: decklistAfterCardRemoval,
        manaCurve: manacurveAfterCostRemoval,
        max
      }
      //add type and rarity
    });
    // console.log(foo);
  };

  render() {
    const {cards, activeDeck, activeDeckCopy, activeUser, deckEditView, patch, params, updateActiveDeckCopy} = this.props;
    if(activeDeck.loading){
      return <Loader/>
    } else {
      return (
          <div className="container__page container__page--twoSided deck">
            <LeftContainer activeDeck={activeDeck}
                           activeDeckCopy={activeDeckCopy}
                           updateActiveDeckCopy={updateActiveDeckCopy}
                           deckEditView={deckEditView}
                           cards={cards}
                           handleCardClick={this.handleCardClick}
                           handleCardRemovalClick={this.handleCardRemovalClick}/>
            <RightContainer activeDeck={activeDeck}
                            activeDeckCopy={activeDeckCopy}
                            deckEditView={deckEditView}
                            params={params}
                            patch={patch}
                            activeUser={activeUser}
                            handleDeckVotingClick={this.handleDeckVotingClick}/>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const {activeDeck, activeDeckCopy, tools} = state.deckView;
  const {deckEditView} = tools;
  const {cards} = state.cards;

  return {activeDeck, activeDeckCopy, cards, deckEditView};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch({type: FETCH_ACTIVE_DECK_REQUEST, payload}),
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