import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {adventure_detail_tabs, adventure_details} from '../../../../data/adventure-details';
import AdventureDetails from './details';
import NotFound from '../../../shared-assets/not-found';

const Content = ({adventure, boss, cards, details, }) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);
  let wingDetailsPath = boss ? adventure_details.filter(a => a.adventure === adventure)[0].wings.details.map(wing => wing.url).includes(details) : null;

  let bossDetailsPath = (boss && wingDetailsPath)
      ? adventure_details
        .filter(a => a.adventure === adventure)[0].wings.details
        .filter(wing => wing.url === details)
        .map(wing=>wing.bosses)[0]
        .map(boss => boss.url)
        .includes(boss)
      : null;

  let notFoundPage = (boss && wingDetailsPath) ? _.startCase(boss) : _.startCase(details);

  return (detailsPath || (wingDetailsPath && bossDetailsPath))
      ? <AdventureDetails cards={cards} details={details} adventure={adventure}/>
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