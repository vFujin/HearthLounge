import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Overview, Arena, PreOrder, StandardMode} from './assets/shared-topbar-tabs';
import Cards from "../../../../components/extension-blocks/cards"
import {HearthstoneOnAndroid, SpectatorMode} from './assets/gvg';
import {JadeGolemMechanic, MulticlassCards} from './assets/msog';

const components = {
  Overview,
  Arena,
  Cards,
  PreOrder,
  StandardMode,
  HearthstoneOnAndroid,
  SpectatorMode,
  JadeGolemMechanic,
  MulticlassCards
};


const ExpansionDetails = ({cards, details, activeExpansion}) => {
  let activeExpansionTab = activeExpansion.expansion_topbar_tabs.filter(tab => tab.url === details);

  const currentView = () =>{

    return activeExpansionTab.map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url} expansion={activeExpansion} extensionUrl={activeExpansion.url} cards={cards}/>
    })
  };

  return <div>{currentView()}</div>;
};

export default ExpansionDetails;

ExpansionDetails.propTypes = {
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  details:   PropTypes.string,
  expansion: PropTypes.string
};