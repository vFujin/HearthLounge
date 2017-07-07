import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../../../utils/loader';

const Cards = ({cards, expansion}) => {
  const listCards = () =>{
    return cards.sets[expansion].length < 1
        ? <Loader/>
        : cards.sets[expansion].map(c=>
          <li key={c.cardId}>
            <img src={c.img} alt="foo"/>
          </li>
        )
  };

  return (
      <ul className="container__cards">
        {listCards()}
      </ul>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  expansion: PropTypes.string.isRequired
};

export default Cards;