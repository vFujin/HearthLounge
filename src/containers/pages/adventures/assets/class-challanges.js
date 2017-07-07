import React from 'react';
import { adventure_details } from '../../../../data/adventure-details';

const ClassChallenges = props => {
  const {adventure} = props;

  const listClassChallengeCards = (adventure_details_element) =>{
    return (
        adventure_details_element.class_challenges.map((element, index) =>
            <li key={index}>
              <p>{element.class}</p>
              {/*special place for cards </3 */}
            </li>
        )
    )
  };

  return (
      <div className="class-challenges inner-container">
        {adventure_details.map((element, index) =>
            <div className={`${adventure === element.adventure && 'active'}-view `} key={index}>
              <ul key={index}>
                {listClassChallengeCards(element)}
              </ul>
            </div>
        )}
      </div>
  );
};

ClassChallenges.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  // cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default ClassChallenges;