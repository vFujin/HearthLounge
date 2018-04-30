import React from 'react';
import Icon from "../../icon";

const CardCost = ({cost}) => (
  <div className="decklistSidebar__card--cost">
    <Icon name={cost} type="mana"/>
  </div>
);

export default CardCost;