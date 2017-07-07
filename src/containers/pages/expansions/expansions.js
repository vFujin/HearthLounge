import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import Expansion from './right-container/expansion';
import NotFound from '../../shared-assets/not-found';
import SelectExtension from '../../shared-assets/extensions/select-extension';
import {topbar_tabs} from '../../../data/expansion-details'

const Expansions = ({cards, params}) => {
  const {details, expansion} = params;

  const rightContainer = () => {
    let path   = location.pathname.split("/")[2],
        exists = topbar_tabs.map(tab => tab.expansion).includes(path);

    if(expansion !== undefined) {
      return exists
          ? <Expansion cards={cards} details={details} expansion={expansion}/>
          : <NotFound page={_.startCase(expansion)} redirect="expansions"/>
    }
    return <SelectExtension group="expansion"/>
  };


  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <Sidebar expansion={expansion}/>
        </div>
        {rightContainer()}
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