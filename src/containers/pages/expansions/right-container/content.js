import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../shared-assets/not-found';
import _ from 'lodash';
import { topbar_tabs } from '../../../../data/expansion-details';
import ExpansionDetails from './details';

const Content = ({cards, details, expansion}) => {
  let detailsPath = topbar_tabs.filter(tab => tab.expansion === expansion)[0].expansion_topbar_tabs.map(expansion => expansion.url).includes(details);

  return (
      <div className="content">
        {detailsPath
            ? <ExpansionDetails cards={cards} details={details} expansion={expansion}/>
            : <NotFound page={_.startCase(details)} redirect="expansions"/>}
      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array
};