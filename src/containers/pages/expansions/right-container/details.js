import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Overview, PreOrder} from './overview-assets/index';
import Cards from "../../../../components/extension-blocks/cards"
import {Boss, Bosses} from "../../../../components/extensions/bosses/index";
import {adventureBossExists, adventureWingExists} from "../../../../utils/checkIfPathExist";

const components = {
  Overview,
  Cards,
  PreOrder,
  Bosses
};

const ExpansionDetails = ({cards, decks, details, detailsChild, activeExpansion}) => {
  const extensionCards = cards[activeExpansion.expansion];


  let activeExpansionTab = activeExpansion.expansion_topbar_tabs.filter(tab => tab.url === details);
  const activeView = () =>{

    return activeExpansionTab.map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url}
                   type="expansions"
                   extension={activeExpansion}
                   extensionUrl={activeExpansion.url}
                   cardsLoading={cards.loading}
                   cards={extensionCards}/>
    })
  };

  const bossDetails = () => {
    let wing = activeExpansion.wings.details.find(wing => wing.url === details);
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