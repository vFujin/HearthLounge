import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../../../components/loaders/loader";

const CardImg = ({allCards, hoveredCardName}) =>{

    if(allCards.loading){
      return <Loader />
    } else {
      let card = allCards.allCards.find(card => hoveredCardName === card.name);
      return <img src={card.img} alt={hoveredCardName} />
    }
};

export default CardImg;

CardImg.propTypes = {
  allCards: PropTypes.object,
  hoveredCardName: PropTypes.string
};