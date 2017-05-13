import React, {Component} from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {fetchDecks} from '../../../../server/fetch-decks';
import {fetchUsers} from '../../../../server/fetch-users';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import _ from 'lodash';



class DeckSelection extends Component {
  componentDidMount() {
    fetchDecks((v) => this.props.updateDeckList(v));
    fetchUsers((v) => this.props.updateUserList(_.map(v, 'username')));
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
  };


  render() {
    const {decks, users, cards, adventuresToggled, handleTableRowClick, activeAdventure, activeMode, activeClass} = this.props;
    return (
        <div  className="container__page container__page--twoSided decks">
          <LeftContainer users={users}/>
          <RightContainer decks={decks}
                          cards={cards}
                          adventuresToggled={adventuresToggled}
                          activeMode={activeMode}
                          activeAdventure={activeAdventure}
                          activeClass={activeClass}
                          handleTableRowClick={handleTableRowClick}
                          handleModeFilterClick={this.handleModeFilterClick}
                          handleAdventureFilterClick={this.handleAdventureFilterClick}
                          handleClassFilterClick={this.handleClassFilterClick}/>
        </div>
    );
  };
}

const mapStateToProps = state =>{
  const {decks, adventuresToggled, activeAdventure, activeMode, activeClass} = state.deckList;
  const {users} = state.users;
  return {decks, users, adventuresToggled, activeAdventure, activeMode, activeClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckList: (decks) => dispatch({
      type: 'UPDATE_DECK_LIST', decks
    }),
    updateUserList: (users) => dispatch({
      type: 'UPDATE_USER_LIST', users
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

