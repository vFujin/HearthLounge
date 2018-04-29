import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserAvatar from '../../../../../../../components/user/user-avatar'
import GameDetails from "./game";
import SocialMediaDetails from "./social-media";
import GeneralDetails from "./general";
import {fetchDeckAuthorRequest} from "../../../../../../../redux/deck/deck-author/actions";
import './styles.css';

class DeckAuthorDetails extends Component{
  componentDidMount(){
    const {activeDeck, fetchDeckAuthorDetails, deckAuthor} = this.props;
    const {authorId} = activeDeck;

    if(!deckAuthor.uid) {
      fetchDeckAuthorDetails(authorId);
    }
  }

  render() {
    const {deckAuthor} = this.props;
    const {loading} = deckAuthor;
    return (
        <div className={`${this.props.activeDeck.loading ? "loading" : undefined} author-details`}>
          {!this.props.activeDeck.loading && !loading && !deckAuthor.uid &&
            <div className="author-details deleted">[deleted]</div>
          }
          {!this.props.activeDeck.loading && !loading && deckAuthor.uid && (
            <div>
              <UserAvatar deckAuthor={deckAuthor}/>
              <GeneralDetails deckAuthor={deckAuthor}/>
              <GameDetails deckAuthor={deckAuthor}/>
              <SocialMediaDetails deckAuthor={deckAuthor}/>
            </div>
          )}
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