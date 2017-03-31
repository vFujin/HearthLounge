import React from 'react';
import _ from 'lodash';

const DeckDetails = ({deck, deckDetails, mechanics}) => {
  let deckMechanics = [].concat.apply([], _.map(deck, (value)=>value.hasOwnProperty('mechanics') ? value.mechanics : null));
  let countMechanics = _.countBy(deckMechanics, 'name');
  console.log(_.sortBy(deck, countMechanics));
  const listMechanics = () =>{
    return _.sortBy(mechanics).map(mechanic=>
        <tr key={mechanic}>
          <td>{_.startCase(mechanic)}</td>
          <td>{countMechanics[mechanic] || 0}</td>
        </tr>
    )
  };

  return (
      <div className={`list mechanics-list ${deckDetails === false ? 'display-none' : null}`}>
        <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <td>Mechanic</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
          {listMechanics()}
          </tbody>
        </table>
        </div>
      </div>
  );
};

export default DeckDetails;