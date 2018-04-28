import React from 'react';

const TableHead = ({deckEditView}) => (
  <thead>
    <tr>
      <th>Set</th>
      <th>Card</th>
      <th>Amount</th>
      <th colSpan={deckEditView ? 2 : null}>Cost</th>
    </tr>
  </thead>
);

export default TableHead;