import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../../data/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import AdventureDetails from './details';
import NotFound from '../../../../shared-assets/not-found';

const Content = ({adventure, boss, cards, adventureCardbacks, details, decks}) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);
  let wingDetailsPath = boss
      ? adventureWingExists(adventure.url, details)
      : null;
  let bossDetailsPath = (boss && wingDetailsPath)
      ? adventureBossExists(adventure.url, details, boss)
      : null;

  let notFoundPage = (boss && wingDetailsPath) ? _.startCase(boss) : _.startCase(details);

  return (detailsPath || (wingDetailsPath && bossDetailsPath))
      ? <AdventureDetails adventure={adventure}
                          boss={boss}
                          cards={cards}
                          adventureCardbacks={adventureCardbacks}
                          details={details}
                          decks={decks}/>
      : <NotFound page={notFoundPage} redirect="expansions"/>

};

export default Content;

Content.propTypes = {
  adventure: PropTypes.object.isRequired,
  adventureCardbacks: PropTypes.array.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired,
  boss: PropTypes.string,
  details: PropTypes.string,
  decks: PropTypes.array
};