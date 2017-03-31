import React from 'react';
import _ from 'lodash';

const DeckDetails = ({deck, deckDetails, mechanics}) => {
  let deckMechanics = [].concat.apply([], _.map(deck, (value)=>value.hasOwnProperty('mechanics') ? value.mechanics : null));
  let countMechanics = _.countBy(deckMechanics, 'name');

  const listMechanics = () =>{
    return mechanics.map(mechanic=>
        <tr key={mechanic}>
          <td>{_.startCase(mechanic)}</td>
          <td>{countMechanics[mechanic] || 0}</td>
        </tr>
    )
  };

  return (
      <div className={deckDetails === false ? 'display-none' : null}>
        <table>
          <tbody>
          {listMechanics()}
          </tbody>
        </table>
      </div>
  );
};

export default DeckDetails;