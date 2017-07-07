import React from 'react';
import PropTypes from 'prop-types';
import NotFound from '../../../shared-assets/not-found';
import _ from 'lodash';
import {adventure_detail_tabs} from '../../../../data/adventure-details';
import AdventureDetails from './details';

const Content = ({cards, details, adventure}) => {
  let detailsPath = adventure_detail_tabs.map(tab => tab.url).includes(details);

  return (
      <div className="content">
        {detailsPath
            ? <AdventureDetails cards={cards} details={details} adventure={adventure}/>
            : <NotFound page={_.startCase(details)} redirect="expansions"/>}
      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array
};