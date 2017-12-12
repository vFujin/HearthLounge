import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {adventure_details} from '../../../../../data/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import Cards from '../../../../../components/extension-blocks/cards';
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

const AdventureDetails = ({cards, adventureCardbacks, adventure, details, detailsChild, decks}) => {
  const extensionCards = cards[adventure.url === 'naxxramas' ? 'Naxxramas' : adventure.adventure];

  const activeView = () => {
    return adventure_details.find(a=>a.url === adventure.url).extension_topbar_tabs.filter(adventure => adventure.url === details).map(page => {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];
      return <Page key={page.url}
                   type="adventures"
                   extension={adventure}
                   classChallengeType="class-challenges"
                   cards={extensionCards}
                   cardsLoading={cards.loading}
                   extensionUrl={adventure.url}
                   detailsChild={detailsChild}
                   adventureCardbacks={adventureCardbacks} />
    })
  };

  const bossDetails = () => {
    let wing = adventure.wings.details.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === detailsChild);

    return <Boss extensionCards={extensionCards}
                 cardsLoading={cards.loading}
                 key={adventure.url}
                 adventure={adventure}
                 wing={wing}
                 boss={activeBoss}
                 decks={decks}/>
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
  return {cards};
};

export default connect(mapStateToProps, null)(AdventureDetails);


