import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../../components/not-found';
import _ from 'lodash';
import {adventureBossExists, adventureWingExists, expansionDetailExists} from '../../../../utils/checkIfPathExist';
import ExpansionDetails from './details';

const Content = ({details, detailsChild, activeExpansion, expansion}) => {
  let wingDetailsPath = detailsChild
      ? adventureWingExists("expansions", activeExpansion.url, details)
      : null;
  let bossDetailsPath = (detailsChild && wingDetailsPath)
      ? adventureBossExists("expansions", activeExpansion.url, details, detailsChild)
      : null;

  let notFoundPage = (detailsChild && wingDetailsPath) ? _.startCase(detailsChild) : _.startCase(details);

  return (expansionDetailExists(expansion, details) || (wingDetailsPath && bossDetailsPath))
      ? <ExpansionDetails details={details}
                          detailsChild={detailsChild}
                          activeExpansion={activeExpansion}/>
      : <NotFound page={notFoundPage} redirect="expansions"/>
};

export default Content;

Content.propTypes = {
  expansion: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  detailsChild: PropTypes.string
};