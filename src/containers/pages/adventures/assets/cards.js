import React from 'react';

const AdventureCards = props => {
  const {cards, details} = props;

  const listCards = () =>{
    return (
      cards.map((card, i) =>
          <li key={i}>
            <img src={card.img} alt={`${card.name}`}/>
          </li>
      )
    )
  };

  return (
      <ul className={`cards cards-container ${details === 'cards' && 'active'}-view`}>
        {listCards()}
      </ul>
  );
};

AdventureCards.propTypes = {
  cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default AdventureCards;