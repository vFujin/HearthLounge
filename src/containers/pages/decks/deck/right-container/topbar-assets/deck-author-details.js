import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UserAvatar from '../../../../../../components/user/user-avatar'
import GameDetails from "./deck-author-details/game";
import SocialMediaDetails from "./deck-author-details/social-media";
import GeneralDetails from "./deck-author-details/general";
import {fetchDeckAuthorRequest} from "../../../../../../redux/deck/deck-author/actions";

class DeckAuthorDetails extends PureComponent{
  componentDidMount(){
    const {activeDeck, fetchDeckAuthorDetails} = this.props;
    const {authorId} = activeDeck;
    fetchDeckAuthorDetails(authorId);
  }

  render() {
    const {deckAuthor} = this.props;
    const {loading} = deckAuthor;

    return (
        <div className={`${loading ? "loading" : undefined} author-details`}>
          <UserAvatar deckAuthor={deckAuthor}/>
          <GeneralDetails deckAuthor={deckAuthor}/>
          <GameDetails deckAuthor={deckAuthor}/>
          <SocialMediaDetails deckAuthor={deckAuthor}/>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  const {deckAuthor, activeDeck} = state.deckView;
  return {deckAuthor, activeDeck};
};

const mapDispatchToProps = dispatch =>{
  return {
    fetchDeckAuthorDetails: payload => dispatch(fetchDeckAuthorRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckAuthorDetails);

DeckAuthorDetails.propTypes = {
  username: PropTypes.string,
  rank: PropTypes.number,
  avatar: PropTypes.string,
};