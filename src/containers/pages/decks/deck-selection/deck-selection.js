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


class DeckSelection extends Component {
  componentDidMount() {
    console.log(this.props);
    if(this.props.location.query.playerClass){
      getFilteredDecks(decks => this.props.updateDeckList(decks), 'playerClass', this.props.location.query.playerClass);
    } else {
      getLazyloadDecks(v => this.props.updateDeckList(v));
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

  infiniteScroll = (updateDeckList) => {
    const el = document.querySelector('.table-scroll');
    if (el) {
      el.addEventListener("scroll", function () {
            if (el.clientHeight === el.scrollHeight - el.scrollTop) {
              getLazyloadDecks((v) => updateDeckList(v))
            }
          }
      )
    }
  };

  render() {
    const {children, location, decks, activeUser, adventuresToggled, activeAdventure, activeMode, activeClass, currentDeck, params} = this.props;
    this.infiniteScroll(this.props.updateDeckList);

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
    updateDeckList: (decks) => dispatch({
      type: 'UPDATE_DECK_LIST', decks
    }),
    updateUserList: (users) => dispatch({
      type: 'UPDATE_USER_LIST', users
    }),
    updateActiveDeck: (currentDeck) => dispatch({
      type: 'UPDATE_ACTIVE_DECK', currentDeck
    }),
    toggleAdventureFilters: (adventuresToggled) => dispatch({
      type: 'TOGGLE_ADVENTURE_FILTERS', adventuresToggled
    }),
    updateModeFilter: (activeMode) => dispatch({
      type: 'UPDATE_MODE_FILTER', activeMode
    }),
    updateAdventureFilter: (activeAdventure) => dispatch({
      type: 'UPDATE_ADVENTURE_FILTER', activeAdventure
    }),
    updateClassFilter: (activeClass) => dispatch({
      type: 'UPDATE_CLASS_FILTER', activeClass
    })

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelection);

