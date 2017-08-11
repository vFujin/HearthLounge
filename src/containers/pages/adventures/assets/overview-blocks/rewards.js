import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../components/loader";

const Rewards = ({adventureCardbacks}) => {

  const mapCardbacks = () =>{
    if(!adventureCardbacks){
      return <Loader />
    } else {
      return adventureCardbacks.map(cardback => {
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
  adventureCardbacks: PropTypes.array.isRequired
};