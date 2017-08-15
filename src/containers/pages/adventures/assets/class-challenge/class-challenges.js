import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Icon from "../../../../../components/icon";
import ClassChallenge from "./class-challenge";
import ClassChallengeSelection from "./class-challenge-selection";

const ClassChallenges = ({adventure, cards, detailsChild}) => {

  const classChallenge = () =>{
    return adventure.class_challenges.find(challenge => challenge.playerClass === detailsChild);
  };

  const listClassChallengeCards = () =>{
    return (
        adventure.class_challenges.map(challenge =>

            <li key={challenge.playerClass} className={`${challenge.playerClass} active-on-hover ${challenge.playerClass === detailsChild && 'active'}`}>
              <Link to={`/adventures/${adventure.url}/class-challenges/${challenge.playerClass}`}>
                <Icon name={challenge.playerClass} />
                {/*special place for cards </3 */}
              </Link>
            </li>
        )
    )
  };

  return (
          <div className="classChallenges">
            <ul className="classChallenges__sidebar">
              {listClassChallengeCards()}
            </ul>
            {detailsChild
                ? <ClassChallenge challenge={classChallenge()}
                                  cards={cards}
                                  playerClass={detailsChild}/>
                : <ClassChallengeSelection />
            }
          </div>
  );
};

export default ClassChallenges;

ClassChallenges.propTypes = {
  adventure: PropTypes.object.isRequired,
  // cards: React.PropTypes.array,
};