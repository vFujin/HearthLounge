import React from 'react';

const ExpansionCards = props => {
  const {cards, details} = props;

  const listCards = () =>{
    return;
  };

  return (
      <ul className={`cards cards-container ${details === 'cards' && 'active'}-view`}>
        {listCards()}
      </ul>
  );
};

ExpansionCards.propTypes = {
  cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default ExpansionCards;