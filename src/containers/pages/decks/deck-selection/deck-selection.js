import React, {Component} from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {lazyLoadDecks, incrementViewsCount} from '../../../../server/decks/decks';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import _ from 'lodash';



class DeckSelection extends Component {
  componentDidMount() {
    lazyLoadDecks((v) => this.props.updateDeckList(v), null);

    // fetchUsers((v) => this.props.updateUserList(_.map(v, 'username')));
    // window.addEventListener("scroll", function () {
    //       if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
    //         lazyLoadDecks((v) => console.log(v));
    //       }
    //     }
    // )
  }


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
    let targetId = e.currentTarget.id;
    this.props.updateAdventureFilter(targetId);
  };

  handleClassFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    this.props.updateClassFilter(targetId);
    lazyLoadDecks((v) => this.props.updateDeckList(v), targetId);
  };

  handleDeckSnippetClick = (e) =>{
    let deck = e.currentTarget.id;
    let deckDetails = _.head(_.map(this.props.decks).filter(d=>d.id === deck ? d : null));
    this.props.updateActiveDeck(deckDetails);
    incrementViewsCount(deck);
  };


  render() {
    const {children, location, decks, activeUser, users, adventuresToggled, activeAdventure, activeMode, activeClass, currentDeck} = this.props;
    if(location.pathname !== "/decks"){
      return React.cloneElement(children, {activeUser, currentDeck});
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


const mapStateToProps = (state, ownProps) =>{
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

