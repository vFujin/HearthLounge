import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../loaders/diamond/loader";

const Rewards = ({extensionCards, cardsLoading, bossReward}) => {
  const rewardType = () =>{
    if(typeof bossReward === 'object'){
      return bossReward.map(reward => extensionCards.filter(card => reward === card.name).map(card=>{
        return <img key={card.cardId} src={card.img} alt={card.name}/>
      }))
    } else {
      return extensionCards.filter(card => card.name === bossReward).map(card=>
        <img key={card.cardId} src={card.img} alt={card.name}/>
      )
    }
  };

  const mapReward = () =>{
    if(cardsLoading){
      return <Loader theme="light"/>
    } else {
      return rewardType();
    }
  };

  return (
      <div className="container__blocks--block-content rewards">
        <div className="card-img-wrapper">
          {mapReward()}
        </div>
      </div>
  )
};

export default Rewards;

Rewards.propTypes = {
  extensionCards: PropTypes.array,
  cardsLoading: PropTypes.bool,
  bossReward: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
  ])
};