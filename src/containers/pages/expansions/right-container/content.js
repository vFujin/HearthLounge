import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../shared-assets/not-found';
import _ from 'lodash';
import { expansionDetailExists } from '../../../../utils/checkIfPathExist';
import ExpansionDetails from './details';

const Content = ({cards, details, activeExpansion, expansion}) => {
  return (
      <div className="content">
        {expansionDetailExists(expansion, details)
            ? <ExpansionDetails cards={cards} details={details} activeExpansion={activeExpansion}/>
            : <NotFound page={_.startCase(details)} redirect="expansions"/>}
      </div>
  )
};

export default Content;

Content.propTypes = {
  expansion: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }).isRequired,
  details: PropTypes.string.isRequired
};