import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../components/loader";

const Rewards = ({allCards, bossReward}) => {
  const rewardType = () =>{
    if(typeof bossReward === 'object'){
      return bossReward.map(reward => allCards.filter(card => reward === card.name).map(card=>{
        return <img key={card.cardId} src={card.img} alt={card.name}/>
      }))
    } else {
      return allCards.filter(card => card.name === bossReward).map(card=>
        <img key={card.cardId} src={card.img} alt={card.name}/>
      )
    }
  };

  const mapReward = () =>{
    if(allCards.length < 1){
      return <Loader />
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
  allCards: PropTypes.array.isRequired,
  bossReward: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
  ])
};