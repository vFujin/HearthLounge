import React from 'react';
import PropTypes from 'prop-types';

const Cost = ({extensionCost}) => {
  const PriceTableRows = ({price}) => {
    return (
      <tr>
        <th>{price.desc}</th>
        <td>{price.gold}</td>
        <td>{price.usd}</td>
        <td>{price.eur}</td>
        <td>{price.gbp}</td>
      </tr>
    )
  };

  const CostTable = ({cost}) => {
    return (
      <table>
        <thead>
        <tr>
          <th>Wing</th>
          <th>Gold</th>
          <th>USD</th>
          <th>EUR</th>
          <th>GBP</th>
        </tr>
        </thead>
        <tbody>
        {cost.map((price, i) => <PriceTableRows key={i} price={price}/>)}
        </tbody>
      </table>
    )
  };

  return (
      <div className="cost inner-container">
        <CostTable cost={extensionCost}/>
      </div>
  );
};

export default Cost;

Cost.propTypes = {
  extensionCost: PropTypes.array.isRequired
};
