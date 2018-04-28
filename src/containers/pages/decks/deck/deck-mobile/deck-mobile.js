import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {RESET_ACTIVE_DECK} from "../../../../../redux/deck/active-deck/types";
import NotFound from "../../../../../components/not-found/not-found";
import {fetchActiveDeckRequest} from "../../../../../redux/deck/active-deck/actions";
import {updateActiveDeckCopy} from "../../../../../redux/deck/active-deck-copy/actions";
import MobileTopbar from "../../../../../components/mobile/topbar/topbar";
import DeckDetails from "./deck-details";
import DeckDescription from "../right-container/sections/description/description";
import DeckComments from "../right-container/sections/comments/comments";

class DeckMobile extends Component{
  state = {
    activeMobileTab: "deckDetails"
  };

  componentDidMount() {
    const {activeDeck, fetchDeck, match, decks, updateActiveDeckCopy} = this.props;
    const {deckId, deckTitle} = match.params;
    document.title = _.startCase(deckTitle) || "Deck";

    if (!activeDeck.loading && !activeDeck.deckId && !decks.all) {
      fetchDeck(deckId);
    } else {
      updateActiveDeckCopy(activeDeck);
    }
  }

  componentWillUnmount(){
    const {resetActiveDeck, updateActiveDeckCopy} = this.props;
    resetActiveDeck();
    updateActiveDeckCopy('');
  }

  handleMobileTopbarTabClick = e => {
    const id = e.currentTarget.id;

    this.setState({activeMobileTab: id});
  };

  content = (params) => {
    switch(this.state.activeMobileTab){
      case "guide": return <DeckDescription />;
      case "comments": return <DeckComments params={params}/>;
      default: return <DeckDetails />;
    }
  };

  render() {
    const {activeDeck, match} = this.props;
    const {activeMobileTab} = this.state;

    if(activeDeck.err){
      return <NotFound page={match.params.deckId} redirect="decks"/>
    }

    return (
      <div className="container__page deck deck-mobile">
        <MobileTopbar tabs={["deckDetails", "guide", "comments"]} activeMobileTab={activeMobileTab} handleTabClick={this.handleMobileTopbarTabClick}/>
        <div className="content">
          {this.content(match.params)}
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