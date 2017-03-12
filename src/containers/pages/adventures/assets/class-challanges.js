import React from 'react';
import { adventure_details } from '../../../../data/adventure-details';

const AdventureClassChallanges = props => {
  const {adventure, cards, details} = props;

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
      <div className={`class-challanges inner-container ${details === 'class-challanges' && 'active'}-view`}>
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

AdventureClassChallanges.propTypes = {
  adventure: React.PropTypes.string.isRequired,
  cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default AdventureClassChallanges;