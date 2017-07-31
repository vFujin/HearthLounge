import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({deckEditing}) => {
  const colSpan = deckEditing ? 2 : null;

  return (
    <thead>
      <tr>
        <th>Set</th>
        <th>Card</th>
        <th>Amount</th>
        <th colSpan={colSpan}>Cost</th>
      </tr>
    </thead>
  )
};

export default TableHead;

TableHead.propTypes = {
  deckEditing: PropTypes.bool.isRequired
};