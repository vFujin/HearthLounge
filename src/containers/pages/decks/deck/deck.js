import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {rateDeck} from '../../../../firebase/decks/deck/read/decks';

class Deck extends PureComponent{

  componentDidMount(){
    const {currentDeck, updateDecklist, editingDecklist} = this.props;
    const {deck} = currentDeck;
    if(currentDeck){
      updateDecklist(deck)
    }

    if(this.props.deckEditing && (JSON.stringify(editingDecklist) !==  JSON.stringify(deck))){
      window.addEventListener("beforeunload", this.onUnload)
    }
  }

  componentWillUpdate(nextProps){
    //need proper testing
    let decksEqual = JSON.stringify(this.props.editingDecklist) ===  JSON.stringify(this.props.currentDeck.deck);
    let decksNotEqual = JSON.stringify(this.props.editingDecklist) !==  JSON.stringify(this.props.currentDeck.deck);
    let descriptionsEqual = this.props.editingDeckDescription && (this.props.editingDeckDescription === this.props.currentDeck.description);
    let descriptionsNotEqual = this.props.editingDeckDescription && (this.props.editingDeckDescription !== this.props.currentDeck.description);

    if(nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
      window.addEventListener("beforeunload", this.onUnload)
    }
    if(nextProps.deckEditing && (decksEqual && descriptionsEqual)){
      window.removeEventListener("beforeunload", this.onUnload)
    }
    if(!nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
      window.removeEventListener("beforeunload", this.onUnload);
      this.props.updateDecklist(this.props.currentDeck.deck)
      //add description reducer
    }
    if(!nextProps.deckEditing && (decksNotEqual || descriptionsNotEqual)){
      window.removeEventListener("beforeunload", this.onUnload);
      this.props.updateDecklist(this.props.currentDeck.deck)
      //add description reducer
    }
  }

  componentWillUnmount(){
    this.props.toggleDeckEditing(false);
  }

  onUnload = (e) =>{
    e.returnValue = "foo";
  };

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

    this.props.updateDecklist({
        cards: decklistAfterCardRemoval,
        manaCurve: manacurveAfterCostRemoval,
        max
      //add type
    });
  };

  render() {
    const {activeUser, currentDeck, params, editingDecklist, deckEditing, updateDecklist, editingDeckDescription} = this.props;
    let decksNotEqual = JSON.stringify(editingDecklist) !==  JSON.stringify(currentDeck.deck);
    let descriptionsNotEqual = editingDeckDescription && (editingDeckDescription !== currentDeck.description);

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
                          decksNotEqual={decksNotEqual}
                          descriptionsNotEqual={descriptionsNotEqual}
                          activeUser={activeUser}
                          deckEditing={deckEditing}
                          handleDeckEditingClick={this.handleDeckEditingClick}
                          handleDeckVotingClick={this.handleDeckVotingClick}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {deckVote, deckEditing, editingDecklist, editingDeckDescription} = state.deckView;
  return {deckVote, deckEditing, editingDecklist, editingDeckDescription}
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