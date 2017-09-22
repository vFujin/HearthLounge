import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import _ from 'lodash';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {getDeckDetails, getLazyloadDecks} from '../../../../firebase/decks/deck/read';
import {updateViews} from '../../../../firebase/decks/deck/update';
import Loader from '../../../../components/loader';
import NotFound from '../../../shared-assets/not-found';
import {getFilteredDecks} from "../../../../firebase/decks/deck/read/index";
import {navItems} from "../../../../data/nav";
import {addQuery} from "../../../../utils/utils-router";
import {FETCH_DECKS_REQUEST} from "../../../../redux/types/decks";
import {infiniteScroll} from "../../../../utils/infinite-scroll";


class DeckSelection extends Component {
  componentDidMount() {
    const {updateDecklist, decks} = this.props;
    if(this.props.location.query.playerClass){
      // getFilteredDecks(decks => this.props.updateDeckList(decks), 'playerClass', this.props.location.query.playerClass);
    } else {
      // getLazyloadDecks(v => );
    }
    if(decks.loading) {
      updateDecklist()
    }
  }


  // shouldComponentUpdate(nextProps){
  //   return !(
  //       this.props.activeUser !== nextProps.activeUser ||
  //       this.props.cards !== nextProps.cards ||
  //       this.props.cards.patch !== nextProps.cards.patch
  //   );
  //
  // }

  handleModeFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    this.props.updateModeFilter(targetId);
    if(targetId === "adventures"){
      this.props.toggleAdventureFilters(true);
    }
    else {
      this.props.toggleAdventureFilters(false);
    }
  };

  handleAdventureFilterClick = (e) =>{
    // let targetId = e.currentTarget.id;
    // this.props.updateAdventureFilter(targetId);
  };


  handleFiltersClick = e =>{
    const {activeMode, activeClass, updateModeFilter, updateClassFilter, updateDeckList} = this.props;
    let targetId = e.currentTarget.id;
    let targetFilter = e.currentTarget.dataset.filter;
    addQuery({[targetFilter]: targetId});
    switch(targetFilter){
      case 'playerClass': {
        updateClassFilter(targetId);
        if(activeMode && activeClass){
          getFilteredDecks(decks => updateDeckList(decks), 'mode_class', `${activeMode}_${targetId}`);
        } else {
          getFilteredDecks(decks => updateDeckList(decks), 'playerClass', targetId);
        }
        break;
      }
      case 'mode': {
        updateModeFilter(targetId);
        if(activeMode && activeClass){
          getFilteredDecks(decks => updateDeckList(decks), 'mode_class', `${targetId}_${activeClass}`);
        } else {
          getFilteredDecks(decks => updateDeckList(decks), 'mode', targetId);
        }
        break;
      }
      default: return null;
    }
  };


  handleClassFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    this.props.updateClassFilter(targetId);
    getLazyloadDecks((v) => this.props.updateDeckList(v), targetId);
  };

  handleDeckSnippetClick = (e) =>{
    let deckId = e.currentTarget.id;
    let deckObject = _.head(_.map(this.props.decks).filter(deckObject=>deckObject.deckId === deckId ? deckObject : null));
    this.props.updateActiveDeck(deckObject);
    updateViews(deckId);
  };
  //
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
    const {children, location, decks, activeUser, adventuresToggled, activeAdventure, activeMode, activeClass, currentDeck, params} = this.props;
    this.infiniteScroll(this.props.updateDecklist);

    if(location.pathname !== "/decks"){
      if(!currentDeck){
        getDeckDetails(params.deckId, v=>{
          this.props.updateActiveDeck(v);
        });
        if(currentDeck === null){
          return <NotFound/>
        }
        return <Loader/>
      }
      return React.cloneElement(children, {activeUser, currentDeck});
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
  const {decks, currentDeck, adventuresToggled, activeAdventure, activeMode, activeClass} = state.deckList;
  const {activeUser} = state.users;
  return {decks, activeUser, currentDeck, adventuresToggled, activeAdventure, activeMode, activeClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDecklist: () => dispatch({type: FETCH_DECKS_REQUEST}),
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

