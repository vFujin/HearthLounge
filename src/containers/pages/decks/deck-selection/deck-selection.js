import React, {Component} from 'react';
import LeftContainer from './left-container/left-container';
import RightContainer from './right-container/right-container';
import {fetchDecks} from '../../../../server/fetch-decks';
import 'whatwg-fetch';
import {connect} from 'react-redux';

class DeckSelection extends Component {

  constructor(props){
    super(props);

    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    fetchDecks((v)=>{
      console.log(v);
      return this.setState({
        decks: v
      })
    })
  }

  render() {
    return (
        <div  className="container__page container__page--twoSided decks">
          <LeftContainer/>
          <RightContainer handleTableRowClick={this.props.handleTableRowClick}/>
        </div>
    );
  };
}

const mapStateToProps = state =>{
  const {filter} = state.deckListFilters;
  return {filter};
};

export default connect(mapStateToProps)(DeckSelection);

