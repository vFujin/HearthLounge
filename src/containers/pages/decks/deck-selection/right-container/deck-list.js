import React from 'react';
import DeckSnippet from '../../right-container/cards-list/deck-snippet';

const DeckList = ({handleTableRowClick}) => {
  return (
      <table className="shared-table">
        <tbody>
        <tr>
          <td className="name">Name</td>
          <td className="class">Class</td>
          <td className="rating">Rating</td>
          <td className="views">Views</td>
          <td className="mana-curve">Mana</td>
          <td className="type">Type</td>
          <td className="created">Created</td>
        </tr>
        <DeckSnippet handleTableRowClick={handleTableRowClick} class="warlock"/>
        <DeckSnippet handleTableRowClick={handleTableRowClick} class="hunter"/>
        <DeckSnippet handleTableRowClick={handleTableRowClick} class="mage"/>
        </tbody>
      </table>
  )
};

export default DeckList;