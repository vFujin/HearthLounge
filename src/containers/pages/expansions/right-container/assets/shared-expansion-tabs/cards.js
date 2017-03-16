import React from 'react';

const ExpansionCards = props => {
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

ExpansionCards.propTypes = {
  // cards: React.PropTypes.array,
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default ExpansionCards;