import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({cards}) =>{
  return(
        <ul className="container__cards">
          {cards}
        </ul>
  )
};



Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;