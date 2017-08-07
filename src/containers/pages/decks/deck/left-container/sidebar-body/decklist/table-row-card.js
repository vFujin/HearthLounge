import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../../../../components/icons/icon';
import {cardRarityBackground} from "../../../../../../../utils/deck/card-rarity-background";

const Card = ({index, card, cardNames, deckEditing, handleCardRemovalClick}) => {
  return(
        <tr key={index} className={cardRarityBackground(card.rarity)}>
          <td>
            <Icon name={card.set} type="set" tooltip={true} tooltipPlacement="right"/>
          </td>
          <td>{cardNames[index]}</td>
          <td>{card.amount}</td>
          <td>
            <Icon name={card.cost} type="mana"/>
          </td>

          {deckEditing
              ? <td>
                <div id={cardNames[index]}
                     data-cost={card.cost}
                     data-amount={card.amount} onClick={(e) => handleCardRemovalClick(e)}>
                  <Icon name="cross" tooltip={false}/>
                </div>
              </td>
              : null}
        </tr>
    )
};

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired,
  cardNames: PropTypes.array.isRequired,
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  index: PropTypes.number
};