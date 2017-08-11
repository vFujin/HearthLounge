import React from 'react';
import PropTypes from 'prop-types';

import { adventure_details } from '../../../../data/adventure-details';

const ClassChallenges = ({adventure}) => {
  const listClassChallengeCards = (adventure) =>{
    return (
        adventure.class_challenges.map((element, index) =>
            <li key={index}>
              <p>{element.class}</p>
              {/*special place for cards </3 */}
            </li>
        )
    )
  };

  return (
      <div className="class-challenges inner-container">
        {adventure_details.filter(a => a.url === adventure.url).map((adventure, index) =>
          <ul key={index}>
            {listClassChallengeCards(adventure)}
          </ul>
        )}
      </div>
  );
};

export default ClassChallenges;

ClassChallenges.propTypes = {
  adventure: PropTypes.string.isRequired,
  // cards: React.PropTypes.array,
};