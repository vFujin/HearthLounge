import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RESET_ACTIVE_DECK} from "../../../../../redux/deck/active-deck/types";
import NotFound from "../../../../../components/not-found/not-found";
import {fetchActiveDeckRequest} from "../../../../../redux/deck/active-deck/actions";
import {updateActiveDeckCopy} from "../../../../../redux/deck/active-deck-copy/actions";
import MobileTopbar from "../../../../../components/mobile/topbar/topbar";
import DeckDetails from "./deck-details";
import DeckDescription from "../right-container/sections/description/description";
import DeckComments from "../right-container/sections/comments/comments";
import DeckAuthorDetails from "../right-container/topbar/deck-author-details/deck-author-details";
import './deck-mobile-styles.css';

class DeckMobile extends Component{
  state = {
    activeMobileTab: "deckDetails"
  };

  handleMobileTopbarTabClick = e => {
    const id = e.currentTarget.id;

    this.setState({activeMobileTab: id});
  };

  content = (params) => {
    switch(this.state.activeMobileTab){
      case "aboutAuthor": return <DeckAuthorDetails />;
      case "guide": return <DeckDescription />;
      case "comments": return <DeckComments params={params}/>;
      default: return <DeckDetails />;
    }
  };

  render() {
    const {activeDeck, params} = this.props;
    const {activeMobileTab} = this.state;

    if(activeDeck.err){
      return <NotFound page={params.deckId} redirect="decks"/>
    }

    return (
      <div className="container__page container__page--mobile deck">
        <MobileTopbar tabs={["aboutAuthor", "deckDetails", "guide", "comments"]} activeMobileTab={activeMobileTab} handleTabClick={this.handleMobileTopbarTabClick}/>
        <div className="container__page--right">
          <div className="content">
            <div className="container__details">
              {this.content(params)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {decks} = state.decks;
  const {activeDeck} = state.deckView;

  return {activeDeck, decks};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch(fetchActiveDeckRequest(payload)),
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
    resetActiveDeck: () => dispatch({type: RESET_ACTIVE_DECK})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckMobile);