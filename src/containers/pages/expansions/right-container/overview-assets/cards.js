import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../../components/loader';

const Cards = ({cards, expansion}) => {
  const listCards = () =>{
    return cards.sets[expansion.url].length < 1
        ? <Loader/>
        : cards.sets[expansion.url].map(c=>
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
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired,
  expansion: PropTypes.string.isRequired
};

export default Cards;