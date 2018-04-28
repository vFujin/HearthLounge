import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {udpateDeckRating} from "../../../../../../../firebase/decks/deck/update";
import Icon from "../../../../../../../components/icon";

class DeckVotes extends Component {

  handleDeckVotingClick = (e) =>{
    const {activeUser, activeDeck, updateDeckRating} = this.props;
    const {deckId} = activeDeck;
    const {uid} = activeUser;
    let vote = e.currentTarget.id;

    udpateDeckRating(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
  };

  render() {
    const {loading, upvotes, downvotes} = this.props.activeDeck;
    let votes = loading ? 0 : (upvotes - downvotes);
    let voteResClass = votes >= 0 ? 'pos' : 'neg';

    return (
      <div className="deck-details-wrapper votes">
        <Icon id="upvote"
              name="circle-up"
              className="monk active-without-background"
              onClick={this.handleDeckVotingClick}/>
        <p className={voteResClass}>{votes}</p>
        <Icon id="downvote"
              name="circle-down"
              className="death-knight active-without-background"
              onClick={this.handleDeckVotingClick}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { activeUser } = state.users;
  const { activeDeck } = state.deckView;
  return { activeDeck, activeUser };
};

const mapDispatchToProps = dispatch => {
  return {
      // : payload => dispatch((payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckVotes);

DeckVotes.propTypes = {
  activeDeck: PropTypes.shape({
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
  }),
  handleDeckVotingClick: PropTypes.func
};
