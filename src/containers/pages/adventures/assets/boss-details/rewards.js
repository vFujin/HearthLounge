import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../components/loader";

const Rewards = ({allCards, bossReward}) => {
  const rewardType = () =>{
    if(typeof bossReward === 'object'){
      return bossReward.map(reward => allCards.filter(card => reward === card.name).map(card=>{
        return <img src={card.img} alt={card.name}/>
      }))
    } else {
      return allCards.filter(card => card.name === bossReward).map(card=>{
        console.log(card)


        return <img src={card.img} alt={card.name}/>
      })
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
      <div className="container__boss--block-content rewards">
        <div className="img-wrapper">
          {mapReward()}
        </div>
      </div>
  )
};

export default Rewards;