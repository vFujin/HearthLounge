import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import Overview from './overview-assets/overview';
import {default as Cards} from "../../../../components/cards/cards"
import {Boss} from "../../../../components/extensions/bosses/index";
import {adventureBossExists, adventureWingExists} from "../../../../utils/checkIfPathExist";
import {default as DungeonRun} from "../../../../components/extensions/class-challenges/class-challenges";
import Bosses from "../../../../components/extensions/bosses/bosses";

const components = {
  Overview,
  Cards,
  DungeonRun,
  Boss,
  Bosses
};

const ExpansionDetails = ({cards, decks, details, detailsChild, activeExpansion}) => {
  const extensionCards = cards[activeExpansion.name];
  let activeExpansionTab = activeExpansion.extension_topbar_tabs.filter(tab => tab.url === details);
  const activeView = () => activeExpansionTab.map(page=> {
    let componentName = _.upperFirst(_.camelCase(page.name));
    let Page = components[componentName];
    return <Page key={page.url}
                 type="expansions"
                 inExtensions
                 cardSet={activeExpansion.name}
                 extension={activeExpansion}
                 classChallengeType="dungeon-run"
                 extensionUrl={activeExpansion.url}
                 cardsLoading={cards.loading}
                 detailsChild={detailsChild}
                 cards={extensionCards}/>
  });

  const bossDetails = () => {
    let wing = activeExpansion.wings.find(wing => wing.url === details);
    let activeBoss = wing.bosses.find(b => b.url === detailsChild);
    return <Boss extensionCards={extensionCards}
                 cardsLoading={cards.loading}
                 key={activeExpansion.url}
                 adventure={activeExpansion}
                 wing={wing}
                 boss={activeBoss}
                 decks={decks}/>
  };

  return <div className="content">
    {(adventureWingExists("expansions", activeExpansion.url, details) && adventureBossExists("expansions", activeExpansion.url, details, detailsChild))
        ? bossDetails()
        : activeView()
    }
  </div>
};

const mapStateToProps = state =>{
  const {cards} = state.cards;
  return {cards};
};

export default connect(mapStateToProps, null)(ExpansionDetails);

ExpansionDetails.propTypes = {
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details:   PropTypes.string,
  expansion: PropTypes.string
};