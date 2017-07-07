import React from 'react';
import { adventure_details } from '../../../../data/adventure-details';

const Structure = props => {
  const {adventure, details} = props;

  return (
      <div className={`structure inner-container ${details === 'structure' && 'active'}-view`}>
        {adventure_details.map((a, index) =>
            <div className={`${adventure === a.adventure && 'active'}-view`} key={index}>
              <ul>
                <li>{a.structure.wing_amount} wings</li>
                <li>
                  <ul>
                    {a.structure.wing_details.map((element, index) =>
                        <li key={index}>{element}</li>
                    )}
                  </ul>
                </li>
                <li>{a.structure.bosses_amount} bosses</li>
                <li>{a.structure.bosses_difficulty}</li>
                <li>{a.structure.class_challenges} class challanges</li>
                <li>{a.structure.class_challenges_details}</li>
              </ul>
            </div>
        )}
      </div>
  );
};

Structure.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired
};

export default Structure;