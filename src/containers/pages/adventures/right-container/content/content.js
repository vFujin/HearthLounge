import React from 'react';
import _ from 'lodash';
import {adventure_details} from '../../../../../globals/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../../utils/checkIfPathExist';
import AdventureDetails from './details';
import NotFound from '../../../../../components/not-found/not-found';

const Content = ({adventure, detailsChild, details}) => {
  let detailsPath = adventure_details.find(a=>a.url === adventure.url).extension_topbar_tabs.map(tab => tab.url).includes(details);

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
                          details={details}/>
      : <NotFound page={notFoundPage} redirect="expansions"/>

};

export default Content;