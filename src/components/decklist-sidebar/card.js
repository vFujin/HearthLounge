import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {cardRarityBackground} from "../../utils/deck/card-rarity-background";
import Tooltip from 'antd/lib/tooltip';
import CardImg from "./card-img";
import CardName from "./card/name";
import CardCost from "./card/cost";
import CardRemove from "./card/remove";

const Card = ({cards, index, card, cardNames, deckEditView}) => (
  <Tooltip title={!deckEditView && <CardImg allCards={cards.cards} hoveredCardName={cardNames[index]}/>}
           overlayClassName="decklist-card-img"
           arrowPointAtCenter={true}
           placement="right">
    <li key={index} className={`decklistSidebar__card ${cardRarityBackground(card.rarity)}`}>
      <CardName card={card} cardNames={cardNames} index={index} />
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
  card: PropTypes.object.isRequired,
  cardNames: PropTypes.array.isRequired,
  index: PropTypes.number
};