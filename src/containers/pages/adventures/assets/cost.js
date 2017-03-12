import React from 'react';
import { adventure_details } from '../../../../data/adventure-details';

const AdventureCost = props => {
  const {adventure, details} = props;

  const cost_description = (adventure) => {
    let countWings = adventure_details[0].cost.wings.length;
    return (
        <div className="cost-description">
          <p>Adventure {adventure.singular_adventure_name} yada yada.</p>
          <p>Adventure has <span>{countWings}</span> wings; each wing costs <span>{adventure.cost.wings[0].gold}</span> gold or <span>{adventure.cost.wings[0].eur}</span>€</p>
          <p>Buying whole adventure yada yada.</p>
          <p>Below yada yada {adventure.plural_aventure_name}.</p>
          <p>PS. You can't buy whole adventure at once but yada yada</p>
        </div>
    )
  };

  const cost_table = (adventure, index) => {
    return (
        <table key={index}>
          <thead>
          <tr>
            <th>Wing</th>
            <th>Gold</th>
            <th>EUR</th>
          </tr>
          </thead>
          <tbody>
          {adventure.cost.wings.map((element, i) =>
              <tr key={i}>
                <th>{element.desc}</th>
                <td>{element.gold}</td>
                <td>{element.eur}</td>
              </tr>
          )}
          </tbody>
        </table>
    )
  };

  return (
      <div className={`cost inner-container ${details === 'cost' && 'active'}-view `}>
        {adventure_details.map((a, index) =>
            <div className={`${adventure === a.adventure && 'active'}-view`} key={index}>
              {cost_description(a)}
              {cost_table(a, index)}
            </div>
        )}

      </div>
  );
};

AdventureCost.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired
};

export default AdventureCost;