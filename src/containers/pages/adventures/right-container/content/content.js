import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../../data/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import AdventureDetails from './details';
import NotFound from '../../../../shared-assets/not-found';

const Content = ({adventure, detailsChild, adventureCardbacks, details, decks}) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);
  let wingDetailsPath = detailsChild
      ? adventureWingExists("adventures", adventure.url, details)
      : null;
  let bossDetailsPath = (detailsChild && wingDetailsPath)
      ? adventureBossExists("adventures", adventure.url, details, detailsChild)
      : null;

  let notFoundPage = (detailsChild && wingDetailsPath) ? _.startCase(detailsChild) : _.startCase(details);

  return (detailsPath || (wingDetailsPath && bossDetailsPath))
      ? <AdventureDetails adventure={adventure}
                          detailsChild={detailsChild}
                          adventureCardbacks={adventureCardbacks}
                          details={details}
                          decks={decks}/>
      : <NotFound page={notFoundPage} redirect="expansions"/>

};

export default Content;

Content.propTypes = {
  adventure: PropTypes.object.isRequired,
  adventureCardbacks: PropTypes.array.isRequired,
  detailsChild: PropTypes.string,
  details: PropTypes.string,
  decks: PropTypes.array
};