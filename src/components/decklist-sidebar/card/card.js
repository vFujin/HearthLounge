import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {cardRarityBackground} from "../../../utils/deck/card-rarity-background";
import Tooltip from 'antd/lib/tooltip';
import CardImg from "./card-img";
import CardName from "./name";
import CardCost from "./cost";
import CardRemove from "./remove";

const Card = ({cards, card, deckEditView}) => (
  <Tooltip title={!deckEditView && <CardImg allCards={cards.cards} hoveredCardName={card.name}/>}
           overlayClassName="decklist-card-img"
           arrowPointAtCenter={true}
           placement="right">
    <li key={card.cardId} className={`decklistSidebar__card ${cardRarityBackground(card.rarity)}`}>
      <CardName set={card.set} name={card.name} amount={card.amount}/>
      <CardCost cost={card.cost}/>
      {deckEditView && <CardRemove card={card} />}
    </li>
  </Tooltip>
);

const mapStateToProps = state => {
  const { cards, deckView } = state;
  const { tools } = deckView;
  const { deckEditView } = tools;
  return { cards, deckEditView };
};

export default connect(mapStateToProps)(Card);

Card.propTypes = {
  card: PropTypes.object.isRequired
};