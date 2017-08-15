import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from "../../containers/pages/cards/right-container/card-details";

const Cards = ({extensionUrl, cards}) => {
  const set = () =>{
      return cards.sets[extensionUrl].map(card =>
          <li key={card.cardId}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <div className="img-wrapper">
                <img src={card.img} alt={card.name}/>
              </div>
            </Tooltip>
          </li>
      )
  };

  const listCards = () =>{
    if(cards.sets[extensionUrl] && cards.sets[extensionUrl].length > 0){
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
  extensionUrl: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired
};
