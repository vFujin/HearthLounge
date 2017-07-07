import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../shared-assets/not-found';
import _ from 'lodash';
import { topbar_tabs } from '../../../../data/expansion-details';
import Overview from './assets/shared-expansion-tabs/overview';
import Arena from './assets/shared-expansion-tabs/arena';
import Cards from './assets/shared-expansion-tabs/cards';
import PreOrder from './assets/shared-expansion-tabs/preorder';
import StandardMode from './assets/shared-expansion-tabs/standard-mode';

import {HearthstoneOnAndroid} from './assets/gvg/hs-on-android';
import {SpectatorMode} from './assets/gvg/spectator-mode';

import {JadeGolemMechanic} from './assets/msog/jade-golem-mechanic';
import {MulticlassCards} from './assets/msog/multiclass-cards';

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

const Content = ({cards, details, expansion}) => {

  const currentView = () =>{
    return topbar_tabs.filter(tab => tab.expansion === expansion)[0].expansion_topbar_tabs.filter(tab => tab.url === details).map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];

      return <Page key={page.url} expansion={expansion} topbarActiveTabUrl={details} cards={cards}/>
    })
  };

  return (
      <div className="content">
        {currentView()}
      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array
};