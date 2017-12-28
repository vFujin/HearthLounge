import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loader from "../../../../../../../components/loaders/loader";

const DeckMechanics = ({deck, cards}) => {
  const {loading, allCards} = cards;
  let deckMechanics = [].concat.apply([], _.map(deck, (value)=>value.hasOwnProperty('mechanics') ? value.mechanics : null));
  let countMechanics = _.countBy(deckMechanics, 'name');

  const listMechanics = () =>{
    const {mechanics} = allCards;

    return _.sortBy(mechanics).map(mechanic=>
        <tr className={`${countMechanics[mechanic] > 0 ? 'has-mechanic' : ''}`} key={mechanic}>
          <td>{_.startCase(mechanic)}</td>
          <td>{countMechanics[mechanic] || 0}</td>
        </tr>
    )
  };

  return (
      <div className="list mechanics-list">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <td>Mechanic</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
            {loading ? <Loader theme="light"/> : listMechanics()}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default DeckMechanics;

DeckMechanics.propTypes = {
  deck: PropTypes.array,
  cards: PropTypes.object
};