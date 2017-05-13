import React, {Component} from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {fetchDecks} from '../../../../server/fetch-decks';
import 'whatwg-fetch';
import {connect} from 'react-redux';




class DeckSelection extends Component {
  componentDidMount() {
    fetchDecks((v) => this.props.updateDeckList(v));
    // window.addEventListener("scroll", function () {
    //       if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
    //         lazyLoadDecks((v) => console.log(v));
    //       }
    //     }
    // )
  }

  handleModeFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    // let areActive = this.props.adventureFilter === false ? true : false;
    // this.props.toggleAdventureFilters(areActive)
    this.props.updateModeFilter(targetId);
  };

  handleClassFilterClick = (e) =>{
    let targetId = e.currentTarget.id;
    // let areActive = this.props.adventureFilter === false ? true : false;
    // this.props.toggleAdventureFilters(areActive)
    this.props.updateClassFilter(targetId);
  };


  render() {
    const {decks, cards, handleTableRowClick} = this.props;
    return (
        <div  className="container__page container__page--twoSided decks">
          <LeftContainer/>
          <RightContainer decks={decks}
                          cards={cards}
                          handleTableRowClick={handleTableRowClick}
                          handleModeFilterClick={this.handleModeFilterClick}
                          handleClassFilterClick={this.handleClassFilterClick}/>
        </div>
    );
  };
}

const mapStateToProps = state =>{
  const {decks, adventureFilter, activeMode, activeClass} = state.deckList;
  return {decks, adventureFilter, activeMode, activeClass};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckList: (decks) => dispatch({
      type: 'UPDATE_DECK_LIST', decks
    }),
    toggleAdventureFilters: (adventures) => dispatch({
      type: 'TOGGLE_ADVENTURE_FILTERS', adventures
    }),
    updateModeFilter: (activeMode) => dispatch({
      type: 'UPDATE_MODE_FILTER', activeMode
    }),
    updateClassFilter: (activeClass) => dispatch({
      type: 'UPDATE_CLASS_FILTER', activeClass
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelection);

