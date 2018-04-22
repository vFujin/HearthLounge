import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as types from "../../../../../../redux/deck/deck-author/types";
import UserAvatar from '../../../../../../components/user/user-avatar'
import GameDetails from "./deck-author-details/game";
import SocialMediaDetails from "./deck-author-details/social-media";
import GeneralDetails from "./deck-author-details/general";
import SimplifiedUserSnippet from "../../../../../../components/user/simplified-user-snippet";

class DeckAuthorDetails extends PureComponent{
  componentDidMount(){
    const {activeDeck, fetchDeckAuthorDetails} = this.props;
    const {authorId} = activeDeck;
    fetchDeckAuthorDetails(authorId);
  }

  render() {
    const {deckAuthor} = this.props;
    return (
        <div className="author-details">
          <UserAvatar deckAuthor={deckAuthor}/>
          <GeneralDetails deckAuthor={deckAuthor}/>
          <GameDetails deckAuthor={deckAuthor}/>
          <SocialMediaDetails deckAuthor={deckAuthor}/>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  const {deckAuthor} = state.deckView;
  return {deckAuthor};
};

const mapDispatchToProps = dispatch =>{
  return {
    fetchDeckAuthorDetails: payload => dispatch({
      type: types.FETCH_DECK_AUTHOR_REQUEST, payload
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckAuthorDetails);

DeckAuthorDetails.propTypes = {
  username: PropTypes.string,
  rank: PropTypes.number,
  avatar: PropTypes.string,
};