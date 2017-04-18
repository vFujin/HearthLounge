import React from 'react';

const Cards = ({cards}) =>{
  return(
      <div className="content">
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