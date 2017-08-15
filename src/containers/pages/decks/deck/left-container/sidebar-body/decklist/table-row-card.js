import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../../../../components/icon';
import {cardRarityBackground} from "../../../../../../../utils/deck/card-rarity-background";
import Tooltip from 'antd/lib/tooltip';
import CardImg from "./card-img";
const Card = ({allCards, index, card, cardNames, deckEditing, handleCardRemovalClick}) => {

  return(
      <Tooltip title={<CardImg allCards={allCards} hoveredCardName={cardNames[index]}/>}
               overlayClassName="decklist-card-img"
               arrowPointAtCenter={true}
               placement="right">
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
      </Tooltip>
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