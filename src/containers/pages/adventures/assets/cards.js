import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../components/loader';

const Cards = ({adventure, cards}) => {

  const set = () =>{
      return cards.sets[adventure.url].map((card, i) =>
          <li key={i}>
            <img src={card.img} alt={`${card.name}`}/>
          </li>
      )
  };

  const listCards = () =>{
    if(cards.sets[adventure.url] && cards.sets[adventure.url].length > 0){
      return (
          <ul className="container__cards">
            {set()}
          </ul>
      )
    }
    return <Loader/>
  };

  return listCards();
};

export default Cards;

Cards.propTypes = {
  adventure: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired
};
