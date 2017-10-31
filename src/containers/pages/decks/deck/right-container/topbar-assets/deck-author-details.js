import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as types from "../../../../../../redux/deck/deck-author/types";
import UserAvatar from '../../../../../../components/user/user-avatar'
import GameDetails from "./deck-author-details/game";
import SocialMediaDetails from "./deck-author-details/social-media";
import GeneralDetails from "./deck-author-details/general";

class DeckAuthorDetails extends PureComponent{
  componentDidMount(){
    const {activeDeck, fetchDeckAuthorDetails} = this.props;
    const {authorId} = activeDeck;
    fetchDeckAuthorDetails(authorId);
  }

  render() {
    console.log(this.props.deckAuthor);
    const {username, rank, avatar} = this.props.deckAuthor;
    return (
        <div className="details">
          <UserAvatar avatar={avatar} username={username}/>
          <GeneralDetails username={username} rank={rank}/>
          <GameDetails />
          <SocialMediaDetails/>
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