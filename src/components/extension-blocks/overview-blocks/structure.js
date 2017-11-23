import React from 'react';
import PropTypes from 'prop-types';

const Structure = ({extensionStructure}) => {
  const {wing_amount, wing_details, bosses_amount, bosses_difficulty, class_challenges, class_challenges_details} = extensionStructure;
  const StructureDetails = () =>{
    return (
        <ul>
          <li>{wing_amount} wings</li>
          <li>
            <ul>
              {wing_details.map((element, index) =>
                  <li key={index}>{element}</li>
              )}
            </ul>
          </li>
          <li>{bosses_amount} bosses</li>
          <li>{bosses_difficulty}</li>
          <li>{class_challenges} class challanges</li>
          <li>{class_challenges_details}</li>
        </ul>
    )
  };

  return (
      <div className="structure inner-container">
        <StructureDetails />
      </div>
  );
};

export default Structure;

Structure.propTypes = {
  extensionStructure: PropTypes.object.isRequired
};