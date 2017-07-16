import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import _ from 'lodash';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {getDeckDetails, getDecks} from '../../../../firebase/decks/deck/read';
import {updateViews} from '../../../../firebase/decks/deck/update';
import Loader from '../../../../utils/loader';
import NotFound from '../../../shared-assets/not-found';


class DeckSelection extends Component {
  componentDidMount() {
    getDecks(v => this.props.updateDeckList(v));
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

  handleClassFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    this.props.updateClassFilter(targetId);
    getDecks((v) => this.props.updateDeckList(v), targetId);
  };

  handleDeckSnippetClick = (e) =>{
    let deckId = e.currentTarget.id;
    let deckObject = _.head(_.map(this.props.decks).filter(deckObject=>deckObject.deckId === deckId ? deckObject : null));
    this.props.updateActiveDeck(deckObject);
    updateViews(deckId);
  };

  infiniteScroll = (updateDeckList) => {
    console.log("foo");
    const el = document.querySelector('.table-scroll');
    if (el) {
      el.addEventListener("scroll", function () {
            if (el.clientHeight === el.scrollHeight - el.scrollTop) {
              getDecks((v) => {
                return updateDeckList(v)
              })
            }
          }
      )
    }
  };

  render() {
    const {cards, children, location, decks, activeUser, users, adventuresToggled, activeAdventure, activeMode, activeClass, currentDeck, params} = this.props;
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
      return React.cloneElement(children, {activeUser, currentDeck, cards});
    }
    else {
      return (
          <div className="container__page container__page--twoSided decks">
            <LeftContainer users={users}/>
            <RightContainer decks={decks}
                            adventuresToggled={adventuresToggled}
                            activeMode={activeMode}
                            activeAdventure={activeAdventure}
                            activeClass={activeClass}
                            handleModeFilterClick={this.handleModeFilterClick}
                            handleAdventureFilterClick={this.handleAdventureFilterClick}
                            handleClassFilterClick={this.handleClassFilterClick}
                            handleDeckSnippetClick={(e) => this.handleDeckSnippetClick(e)}/>
          </div>
      );
    }
  };
}


const mapStateToProps = (state) =>{
  const {decks, currentDeck, adventuresToggled, activeAdventure, activeMode, activeClass} = state.deckList;
  const {activeUser, users} = state.users;
  return {decks, activeUser, users, currentDeck, adventuresToggled, activeAdventure, activeMode, activeClass};
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

