import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../../../components/loader";

const CardImg = ({allCards, hoveredCardName}) =>{

    if(allCards.length < 1){
      return <Loader />
    } else {
      let card = allCards.find(card => hoveredCardName === card.name);
      return <img src={card.img} alt={hoveredCardName} />
    }
};

export default CardImg;

CardImg.propTypes = {
  allCards: PropTypes.array.isRequired,
  hoveredCardName: PropTypes.string.isRequired
};