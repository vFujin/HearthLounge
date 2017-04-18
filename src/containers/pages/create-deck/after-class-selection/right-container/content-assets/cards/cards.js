import React from 'react';

const Cards = ({cards, visible}) =>{
  return(
      <div className={`content ${visible ? 'display-none' : ''}`}>
        <ul className="container__cards">
          {cards}
        </ul>
      </div>
  )
};

Cards.propTypes = {
  cards: React.PropTypes.object.isRequired
};

export default Cards;