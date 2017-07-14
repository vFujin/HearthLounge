import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {rateDeck} from '../../../../firebase/decks/deck/read/decks';

class Deck  extends PureComponent{

  componentDidMount(){
    const {currentDeck, updateDecklist} = this.props;
    if(currentDeck){
      updateDecklist(currentDeck.deck)
    }
  }

  handleDeckVotingClick = (e) =>{
    const {activeUser, currentDeck, updateDeckRating} = this.props;
    let vote = e.currentTarget.id;
    const {deckId} = currentDeck;
    const {uid} = activeUser;
    rateDeck(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
  };

  handleDeckEditingClick = () =>{
    const {toggleDeckEditing, deckEditing} = this.props;
    toggleDeckEditing(!deckEditing ? true : false)
  };

  handleCardRemovalClick = (e) =>{
    const {editingDecklist} = this.props;
    let cards = editingDecklist.cards;
    let manaCurve = editingDecklist.manaCurve;

    let target = e.target;
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

    let manacurveAfterCostRemoval = manaCurve.map((c, i) => i == cardCost ? c-1 : c);
    let max = _.max(manacurveAfterCostRemoval);

    this.props.updateDecklist({
        cards: decklistAfterCardRemoval,
        manaCurve: manacurveAfterCostRemoval,
        max
      //add type
    });
  };

  render() {
    const {activeUser, currentDeck, params, editingDecklist, deckEditing, updateDecklist} = this.props;
    return (
        <div className="container__page container__page--twoSided deck">
          <LeftContainer currentDeck={currentDeck}
                         cards={this.props.cards}
                         editingDecklist={editingDecklist}
                         deckEditing={deckEditing}
                         updateDecklist={updateDecklist}
                         handleCardRemovalClick={this.handleCardRemovalClick}/>
          <RightContainer currentDeck={currentDeck}
                          params={params}
                          activeUser={activeUser}
                          deckEditing={deckEditing}
                          handleDeckEditingClick={this.handleDeckEditingClick}
                          handleDeckVotingClick={this.handleDeckVotingClick}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {deckVote, deckEditing, editingDecklist} = state.deckView;
  return {deckVote, deckEditing, editingDecklist}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckRating: (deckVote) => (dispatch({
      type: 'UPDATE_DECK_RATING', deckVote
    })),
    toggleDeckEditing: (deckEditing) => (dispatch({
      type: 'TOGGLE_DECK_EDITING', deckEditing
    })),
    updateDecklist: (editingDecklist) => (dispatch({
      type: 'UPDATE_DECKLIST', editingDecklist
    }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

Deck.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object,
  updateDeckRating: PropTypes.func,
};