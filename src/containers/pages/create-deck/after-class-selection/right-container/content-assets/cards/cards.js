import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({cards, visible}) =>{
  return(
      <div className={!visible ? 'display-none' : ''}>
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