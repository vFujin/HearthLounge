import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Topbar from './topbar';
import Content from './content/content'
import {getAdventureDecks} from "../../../../firebase/decks/read/adventure";
import {fetchAdventureDecks} from "../../../../redux/actions/adventures/boss";

class Adventure extends PureComponent{

  componentDidMount(){
    const {adventure, fetchAdventureDecks} = this.props;
    getAdventureDecks(adventure, decks => fetchAdventureDecks(decks));
  }

  componentWillReceiveProps(nextProps){
    const {adventure, fetchAdventureDecks} = this.props;
    if(adventure !== nextProps.adventure){
      getAdventureDecks(nextProps.adventure, decks => fetchAdventureDecks(decks));
    }
  }

  render(){

    const {adventure, boss, cards, details, decks} = this.props;
    return (
        <div className='container__page--inner container__page--right'>
          <Topbar adventure={adventure}
                  details={details}
                  boss={boss}/>
          <Content adventure={adventure}
                   boss={boss}
                   cards={cards}
                   decks={decks}
                   details={details}/>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  const {decks, bossDecks} = state.adventures;
  return {decks, bossDecks};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAdventureDecks: decks => dispatch(fetchAdventureDecks(_.map(decks)))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Adventure);

Adventure.propTypes = {
  adventure: PropTypes.string,
  boss: PropTypes.string,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details: PropTypes.string
};