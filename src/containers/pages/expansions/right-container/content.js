import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../shared-assets/not-found';
import _ from 'lodash';
import { topbar_tabs } from '../../../../data/expansion-details';

import {Overview, Arena, Cards, PreOrder, StandardMode} from './assets/shared-expansion-tabs';
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

const Content = ({cards, details, expansion}) => {
  let detailsPath = topbar_tabs.filter(tab => tab.expansion === expansion)[0].expansion_topbar_tabs.map(expansion => expansion.url).includes(details);

  const currentView = () =>{
    return topbar_tabs.filter(tab => tab.expansion === expansion)[0].expansion_topbar_tabs.filter(tab => tab.url === details).map(page=> {
      let componentName = _.upperFirst(_.camelCase(page.name));
      let Page = components[componentName];


      return <Page key={page.url} expansion={expansion} topbarActiveTabUrl={details} cards={cards}/>
    })
  };

  return (
      <div className="content">
        {detailsPath ? currentView() : <NotFound page={_.startCase(details)} redirect="expansions"/>}
      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array
};