import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../loader";

const Rewards = ({extensionCardbacks}) => {

  const mapCardbacks = () =>{
    if(!extensionCardbacks){
      return <Loader />
    } else {
      return extensionCardbacks.map(cardback => {
        const {cardBackId, imgAnimated, name} = cardback;
        return <img key={cardBackId} src={imgAnimated} alt={name} />
      })
    }
  };

  return (
      <div className="container__blocks--block-content rewards">
        <div className="card-img-wrapper">
          {mapCardbacks()}
        </div>
      </div>
  )
};

export default Rewards;

Rewards.propTypes = {
  extensionCardbacks: PropTypes.array
};