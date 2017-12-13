import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Loader from "../../../../loaders/loader";
import Options from "./options";

const DungeonRun = ({classChallenge, loading, allCards}) =>{
  if(!loading) {
    let updatedCards;
    let cards = [];
    let card = classChallenge.options.map(option => {
      const {label, icon, cards} = option;
      const card = cards.map(card => allCards.find(c => card === c.name));
      return {label, icon, cards: card}
    });
    updatedCards = _.concat(card, cards);
    console.log(updatedCards);
    return <Options options={updatedCards}/>;
  }
  return (
    <div><Loader/></div>
  )
};

const mapStateToProps = state =>{
  const {cards} = state.cards;
  const {loading, allCards} = cards;
  return {loading, allCards}
};

export default connect(mapStateToProps, null)(DungeonRun);