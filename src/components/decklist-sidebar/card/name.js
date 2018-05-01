import React from 'react';
import Icon from "../../icon";
import PropTypes from 'prop-types';

const CardName = ({set, name, amount}) => (
  <div className="decklistSidebar__card--name">
    <div>
      <Icon name={set} type="set" tooltip={true} tooltipPlacement="right"/>
      <p>{name}</p>
    </div>
    <p>x{amount}</p>
  </div>
);

CardName.propTypes = {
  set: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CardName;