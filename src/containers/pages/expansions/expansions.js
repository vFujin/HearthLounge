import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import NotFound from '../../shared-assets/not-found';
import Expansion from './right-container/expansion';
import {topbar_tabs} from '../../../data/expansion-details'

const Expansions = ({cards, params}) => {
  const {details, expansion} = params;

  const expansionExist = () => {
    let path   = location.pathname.split("/")[2],
        exists = topbar_tabs.map(tab => tab.expansion).includes(path);
    console.log(expansion)
    return exists
        ? <Expansion cards={cards} details={details} expansion={expansion} />
        : <NotFound page={_.startCase(expansion)} redirect="expansions"/>
  };

  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <Sidebar expansion={expansion}/>
        </div>
        {expansionExist()}
      </div>
  );
};

export default Expansions;

Expansions.propTypes = {
  cards: PropTypes.array.isRequired,
  params: PropTypes.shape({
    details: PropTypes.string,
    expansion: PropTypes.string
  })
};