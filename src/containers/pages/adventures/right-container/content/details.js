import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../../data/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import {
  Overview,
  ClassChallenges,
  Cost,
  Structure,
} from '../../assets';
import Cards from '../../../../../components/extension-blocks/cards';
import {Boss, Bosses} from "../../../../../components/extensions/bosses";

const components = {
  Overview,
  Bosses,
  Cards,
  ClassChallenges,
  Cost,
  Structure,
  Boss,
};

const AdventureDetails = ({cards, adventureCardbacks, adventure, details, detailsChild, decks}) => {
  const adventureCards = cards[adventure.url === 'naxxramas' ? 'Naxxramas' : adventure.adventure];

  const activeView = () => {
    return adventure_detail_tabs.filter(adventure => adventure.url === details).map(page => {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];
      return <Page key={page.url}
                   type="adventures"
                   extension={adventure}
                   cards={adventureCards}
                   cardsLoading={cards.loading}
                   extensionUrl={adventure.url}
                   detailsChild={detailsChild}
                   adventureCardbacks={adventureCardbacks} />
    })
  };

  const bossDetails = () => {
    let wing = adventure.wings.details.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === detailsChild);

    return <Boss extensionCards={adventureCards}
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


