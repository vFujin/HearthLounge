import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({cards}) =>{
  return(
      <div>
        <ul className="container__cards">
          {cards}
        </ul>
      </div>
  )
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;