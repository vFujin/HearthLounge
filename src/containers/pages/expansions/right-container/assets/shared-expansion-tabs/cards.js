import React from 'react';

const Cards = props => {
  const {topbarActiveTabUrl} = props;

  const listCards = () =>{
    return;
  };

  return (
      <ul className={`cards cards-container ${topbarActiveTabUrl === 'cards' && 'active'}-view`}>
        {listCards()}
      </ul>
  );
};

Cards.propTypes = {
  // cards: React.PropTypes.array,
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default Cards;