import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {topbar_tabs} from '../../../../data/expansion-details'

import {Overview, Arena, Cards, PreOrder, StandardMode} from './assets/shared-topbar-tabs';
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


const ExpansionDetails = ({cards, details, expansion}) => {
  const currentView = () =>{
    return topbar_tabs.filter(tab => tab.expansion === expansion)[0].expansion_topbar_tabs.filter(tab => tab.url === details).map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url} expansion={expansion} cards={cards}/>
    })
  };

  return <div>{currentView()}</div>;
};

export default ExpansionDetails;

ExpansionDetails.propTypes = {
  cards:     PropTypes.array.isRequired,
  details:   PropTypes.string,
  expansion: PropTypes.string
};