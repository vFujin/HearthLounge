import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'
import BossBlock from "../right-container/content/boss-block";
import {foo} from "../../../../firebase/decks/read/adventure";
import {FETCH_BOSS_DECKS} from "../../../../redux/types/adventures/boss";

class Boss extends PureComponent{

  componentDidMount(){
    const {adventure, fetchBossDecks} = this.props;
    foo(adventure.adventure, decks => fetchBossDecks(decks))
  }


  render() {
    const {allCards, adventure, wing, boss, decks} = this.props;
    return (
        <ul className="container__boss">
          <BossBlock blockName="overview" adventure={adventure} wing={wing} boss={boss}/>
          <BossBlock blockName="strategy" adventure={adventure} wing={wing} boss={boss}/>
          <BossBlock blockName="rewards" adventure={adventure} wing={wing} boss={boss} allCards={allCards}/>
          <BossBlock blockName="wing bosses" adventure={adventure} wing={wing} boss={boss}/>
          <BossBlock blockName="decks" adventure={adventure} wing={wing} boss={boss} decks={_.map(decks)}/>
        </ul>
    )
  }
}

const mapStateToProps = state =>{
  const {decks} = state.adventures;
  return {decks};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBossDecks: decks => dispatch({
      type: FETCH_BOSS_DECKS, decks
    })
  }
};

Boss.propTypes = {
  adventure: PropTypes.object.isRequired,
  wing: PropTypes.object.isRequired,
  boss: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Boss);