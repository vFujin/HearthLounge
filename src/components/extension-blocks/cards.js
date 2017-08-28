import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Tooltip from 'antd/lib/tooltip';
import {CardDetails} from "../../containers/pages/cards/right-container/card-details";

const Cards = ({extensionUrl, cards}) => ({
  (cards.sets[extensionUrl] && cards.sets[extensionUrl].length) && (
    <ul className="container__cards">
      {
        cards.sets[extensionUrl].map(card =>
          <li key={card.cardId}>
            <Tooltip placement="left" title={<CardDetails card={card}/>}>
              <div className="img-wrapper">
                <img src={card.img} alt={card.name}/>
              </div>
            </Tooltip>
          </li>
        )
      }
    </ul>
  )

  !(cards.sets[extensionUrl] && cards.sets[extensionUrl].length) && <Loader />
})

export default Cards;

Cards.propTypes = {
  extensionUrl: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired
};
