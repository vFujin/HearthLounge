import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../data/adventure-details';
import {wingExists, bossExists} from '../../../../utils/adventures/paths';
import AdventureDetails from './details';
import NotFound from '../../../shared-assets/not-found';

const Content = ({adventure, boss, cards, details, }) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);
  let wingDetailsPath = boss
      ? wingExists(adventure, details)
      : null;
  let bossDetailsPath = (boss && wingDetailsPath)
      ? bossExists(adventure, details, boss)
      : null;

  let notFoundPage = (boss && wingDetailsPath) ? _.startCase(boss) : _.startCase(details);

  return (detailsPath || (wingDetailsPath && bossDetailsPath))
      ? <AdventureDetails adventure={adventure} boss={boss} cards={cards} details={details}/>
      : <NotFound page={notFoundPage} redirect="expansions"/>

};

export default Content;

Content.propTypes = {
  adventure: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired,
  boss: PropTypes.string,
  details: PropTypes.string
};