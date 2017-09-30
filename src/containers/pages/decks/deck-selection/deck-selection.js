import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import _ from 'lodash';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {getDeckDetails} from '../../../../firebase/decks/deck/read';
import {updateViews} from '../../../../firebase/decks/deck/update';
import Loader from '../../../../components/loader';
import NotFound from '../../../shared-assets/not-found';
import {FETCH_DECKS_REQUEST} from "../../../../redux/decks/fetch-decks/types";
import {UPDATE_DECKS_REQUEST} from "../../../../redux/decks/update-decks/types";
// import {getFilteredDecks} from "../../../../firebase/decks/deck/read/index";
// import {addQuery} from "../../../../utils/utils-router";


class DeckSelection extends Component {
  componentDidMount() {
    const {fetchDecks, updateDecks, decks, location} = this.props;
    const {playerClass} = location.query;

    if(decks.loading) {
      playerClass ? fetchDecks(playerClass) : fetchDecks();
    }
    this.infiniteScroll(updateDecks);
  }

  handleFiltersClick = e =>{
    // const {activeMode, activeClass, updateModeFilter, updateClassFilter, updateDeckList} = this.props;
    // let targetId = e.currentTarget.id;
    // let targetFilter = e.currentTarget.dataset.filter;
    // addQuery({[targetFilter]: targetId});
    // switch(targetFilter){
    //   case 'playerClass': {
    //     // this.props.updateDecks(`${this.props.location.query.playerClass}_timestamp_votes`);
    //     this.props.fetchDecks();
    //     // if(activeMode && activeClass){
    //     //   getFilteredDecks(decks => updateDeckList(decks), 'mode_class', `${activeMode}_${targetId}`);
    //     // } else {
    //     //   getFilteredDecks(decks => updateDeckList(decks), 'playerClass', targetId);
    //     // }
    //     break;
    //   }
    //   case 'mode': {
    //     updateModeFilter(targetId);
    //     if(activeMode && activeClass){
    //       getFilteredDecks(decks => updateDeckList(decks), 'mode_class', `${targetId}_${activeClass}`);
    //     } else {
    //       getFilteredDecks(decks => updateDeckList(decks), 'mode', targetId);
    //     }
    //     break;
    //   }
    //   default: return null;
    // }
  };

  handleDeckSnippetClick = (e) =>{
    let deckId = e.currentTarget.id;
    let deckObject = _.head(_.map(this.props.decks.all).filter(deckObject=>deckObject.deckId === deckId ? deckObject : null));
    this.props.updateActiveDeck(deckObject);
    updateViews(deckId);
  };

  infiniteScroll = (updateDecklist) => {
    const el = document.querySelector('.table-scroll');
    if (el) {
      el.addEventListener("scroll", function () {
            if (el.clientHeight === el.scrollHeight - el.scrollTop) {
              updateDecklist()
            }
          }
      )
    }
  };

  render() {
    const {children, location, decks, activeUser, adventuresToggled, activeAdventure, activeMode, activeClass, activeDeck, params} = this.props;

    if(location.pathname !== "/decks"){
      // if(activeDeck.loading){
      //   getDeckDetails(params.deckId, v => this.props.updateActiveDeck(v), e => console.log('err', e));
      //     return <Loader/>
      // }
      return React.cloneElement(children, {activeUser, activeDeck});
    }
    else {
      return (
          <div className="container__page container__page--twoSided decks">
            <LeftContainer/>
            <RightContainer decks={decks}
                            adventuresToggled={adventuresToggled}
                            activeMode={activeMode}
                            activeAdventure={activeAdventure}
                            activeClass={activeClass}
                            handleFiltersClick={this.handleFiltersClick}
                            handleDeckSnippetClick={(e) => this.handleDeckSnippetClick(e)}/>
          </div>
      );
    }
  };
}

const mapStateToProps = (state) =>{
  const {decks, adventuresToggled, activeAdventure, activeMode, activeClass} = state.decks;
  const {activeDeck} = state.deckView;
  const {activeUser} = state.users;
  return {decks, activeUser, activeDeck, adventuresToggled, activeAdventure, activeMode, activeClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDecks: () => dispatch({type: FETCH_DECKS_REQUEST}),
    updateDecks: () => dispatch({type: UPDATE_DECKS_REQUEST}),
    updateUserList: payload => dispatch({
      type: 'UPDATE_USER_LIST', payload
    }),
    updateActiveDeck: payload => dispatch({
      type: 'UPDATE_ACTIVE_DECK', payload
    }),
    toggleAdventureFilters: payload => dispatch({
      type: 'TOGGLE_ADVENTURE_FILTERS', payload
    }),
    updateModeFilter: payload => dispatch({
      type: 'UPDATE_MODE_FILTER', payload
    }),
    updateAdventureFilter: payload => dispatch({
      type: 'UPDATE_ADVENTURE_FILTER', payload
    }),
    updateClassFilter: payload => dispatch({
      type: 'UPDATE_CLASS_FILTER', payload
    })

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelection);

