import React, {Component} from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {fetchDecks} from '../../../../server/fetch-decks';
import 'whatwg-fetch';
import {connect} from 'react-redux';

class DeckSelection extends Component {
  componentDidMount() {
    fetchDecks((v)=> this.props.updateDeckList(v));
  }


  render() {
    return (
        <div  className="container__page container__page--twoSided decks">
          <LeftContainer/>
          <RightContainer decks={this.props.decks} cards={this.props.cards} handleTableRowClick={this.props.handleTableRowClick}/>
        </div>
    );
  };
}

const mapStateToProps = state =>{
  const {decks} = state.deckList;
  return {decks};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeckList: (decks) => dispatch({
      type: 'UPDATE_DECK_LIST', decks
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSelection);

