import React from 'react';
import {Link} from 'react-router';
import {ClassChallenge, DungeonRun} from "./challenges";
import ClassChallengeSelection from "./class-challenge-selection";
import Icon from "../../icon";

export default ({type, extension, classChallengeType, cards, cardsLoading, detailsChild}) => {
  const classChallenge = extension.class_challenges.find(challenge => challenge.playerClass === detailsChild);

  const listClassChallengeCards = () =>{
    return (
        extension.class_challenges.map(challenge =>
            <li key={challenge.playerClass} className={`${challenge.playerClass} active-on-hover ${challenge.playerClass === detailsChild && 'active'}`}>
              <Link to={`/${type}/${extension.url}/${classChallengeType}/${challenge.playerClass}`}>
                <Icon name={challenge.playerClass} />
              </Link>
            </li>
        )
    )
  };

  const classChallengeTypeSelection = () => {
    switch (classChallengeType) {
      case 'class-challenges':
        return <ClassChallenge challenge={classChallenge}
                               cards={cards}
                               cardsLoading={cardsLoading}
                               playerClass={detailsChild}/>;
      case 'dungeon-run':
        return <DungeonRun/>;
    }
  };

  return (
    <div className="container__classChallenges">
      <ul className="container__classChallenges--sidebar">
        {listClassChallengeCards()}
      </ul>
      {detailsChild
          ? classChallengeTypeSelection()
          : <ClassChallengeSelection />
      }
    </div>
  );
};