import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loader from "../../loaders/loader";

const Rewards = ({gameCardbacks, cardbacks}) => {

 const mapCardbacks = () => {

    if (gameCardbacks.loading) {
      return <Loader theme="light"/>
    } else if (gameCardbacks.error) {
      return <div>{gameCardbacks.error}</div>
    } else {
      const extensionCardbacks = _.map(gameCardbacks).filter(cardback => cardbacks.includes(cardback.cardBackId));
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