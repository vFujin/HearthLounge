import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from "../../containers/pages/cards/right-container/card-details";

const Cards = ({cardsLoading, cards}) => {
  const set = () =>{
      return cards.map(card =>
          <li key={card.cardId}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <div className="img-wrapper">
                <img src={card.img} alt={card.name}/>
              </div>
            </Tooltip>
          </li>
      )
  };

  return cardsLoading
      ? <Loader/>
      : (
          <ul className="container__cards">
            {set()}
          </ul>
      );
};

export default Cards;

Cards.propTypes = {
  cardsLoading: PropTypes.bool,
  cards: PropTypes.array
};
