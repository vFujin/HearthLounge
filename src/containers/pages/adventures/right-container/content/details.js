import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {adventure_details} from '../../../../../globals/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import {default as Cards} from '../../../../../components/cards/cards';
import {Boss, Bosses} from "../../../../../components/extensions/bosses";
import {default as ClassChallenges} from "../../../../../components/extensions/class-challenges/class-challenges";
import Overview from "../../assets/overview";

const components = {
  Overview,
  Bosses,
  Cards,
  ClassChallenges,
  Boss,
};

const AdventureDetails = ({cards, cardbacks, adventure, details, detailsChild}) => {
  const extensionCards = cards[adventure.url === 'naxxramas' ? 'Naxxramas' : adventure.name];

  const activeView = () => {
    return adventure_details.find(a=>a.url === adventure.url).extension_topbar_tabs.filter(adventure => adventure.url === details).map(page => {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];
      return <Page key={page.url}
                   type="adventures"
                   extension={adventure}
                   classChallengeType="class-challenges"
                   cards={extensionCards}
                   isExtension
                   cardSet={adventure.name}
                   cardsLoading={cards.loading}
                   extensionUrl={adventure.url}
                   detailsChild={detailsChild}
                   gameCardbacks={cardbacks} />
    })
  };

  const bossDetails = () => {
    let wing = adventure.wings.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === detailsChild);

    return <Boss extensionCards={extensionCards}
                 cardsLoading={cards.loading}
                 key={adventure.url}
                 adventure={adventure}
                 wing={wing}
                 type="adventures"
                 boss={activeBoss}/>
  };

  return <div className="content">
    {(adventureWingExists("adventures", adventure.url, details) && adventureBossExists("adventures", adventure.url, details, detailsChild))
        ? bossDetails()
        : activeView()
    }
  </div>
};

const mapStateToProps = state => {
  const {cards} = state.cards;
  const {cardbacks} = state;
  return {cards, cardbacks};
};

export default connect(mapStateToProps, null)(AdventureDetails);


