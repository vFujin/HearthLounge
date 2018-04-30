import React from 'react';
import Icon from "../../icon";

const CardName = ({card, cardNames, index}) => (
  <div className="decklistSidebar__card--name">
    <div>
      <Icon name={card.set} type="set" tooltip={true} tooltipPlacement="right"/>
      <p>{cardNames[index]}</p>
    </div>
    <p>x{card.amount}</p>
  </div>
);

export default CardName;