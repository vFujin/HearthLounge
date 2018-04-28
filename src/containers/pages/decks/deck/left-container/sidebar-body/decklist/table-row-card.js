import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Icon from '../../../../../../../components/icon';
import {cardRarityBackground} from "../../../../../../../utils/deck/card-rarity-background";
import Tooltip from 'antd/lib/tooltip';
import CardImg from "./card-img";
import {decklistRemoveCard} from "../../../../../../../utils/deck/edit-mode/decklist-remove-card";
import {updateActiveDeckCopy} from "../../../../../../../redux/deck/active-deck-copy/actions";

const Card = ({cards, index, card, cardNames, deckEditView, activeDeckCopy, updateActiveDeckCopy}) => {
  return(
      <Tooltip title={<CardImg allCards={cards.cards} hoveredCardName={cardNames[index]}/>}
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

          {
            deckEditView
              ? <td>
                <div id={card.cardId}
                     data-cost={card.cost}
                     data-amount={card.amount}
                     onClick={(e) => decklistRemoveCard(e, cards.cards, activeDeckCopy, (updatedDeck) => updateActiveDeckCopy(updatedDeck))}>
                  <Icon name="cross" tooltip={false}/>
                </div>
              </td>
              : null
          }
        </tr>
      </Tooltip>
    )
};

const mapStateToProps = state => {
  const { cards, deckView } = state;
  const {activeDeckCopy, tools} = deckView;
  const { deckEditView } = tools;
  return { cards, activeDeckCopy, deckEditView };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

Card.propTypes = {
  card: PropTypes.object.isRequired,
  cardNames: PropTypes.array.isRequired,
  index: PropTypes.number
};