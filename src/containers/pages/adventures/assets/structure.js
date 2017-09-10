import React from 'react';
import PropTypes from 'prop-types';
import { adventure_details } from '../../../../data/adventure-details';

const Structure = ({extension}) => {
  const structure = () =>{
    return adventure_details.filter(a=> a.url === extension.url).map((a, index) =>
        <ul key={index}>
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
    )
  };

  return (
      <div className="structure inner-container">
        {structure()}
      </div>
  );
};

export default Structure;

Structure.propTypes = {
  extension: PropTypes.object.isRequired
};