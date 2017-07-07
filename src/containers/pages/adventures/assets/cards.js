import React from 'react';
import Loader from '../../../../utils/loader';

const Cards = ({adventure, cards, details}) => {

  console.log(adventure, cards.sets)
  const listCards = () =>{
    return (
        cards.sets[adventure].length < 1 ?
            <Loader/>
            : cards.sets[adventure].map((card, i) =>
                <li key={i}>
                  <img src={card.img} alt={`${card.name}`}/>
                </li>
        )
    )
  };

  return (
      <ul className={`cards container__cards ${details === 'cards' && 'active'}-view`}>
        {listCards()}
      </ul>
  );
};

Cards.propTypes = {
  cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default Cards;