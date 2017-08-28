import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import Expansion from './right-container/expansion';
import NotFound from '../../shared-assets/not-found';
import SelectExtension from '../../shared-assets/extensions/select-extension';
import {expansionExists} from '../../../utils/checkIfPathExist'

const Expansions = ({cards, params}) => {
  const {details, expansion, detailsChild} = params;


  const rightContainer = () => {
    let path = location.pathname.split("/")[2];
    if(expansion !== undefined) {
      return expansionExists(path)
          ? <Expansion cards={cards} details={details} expansion={expansion} detailsChild={detailsChild}/>
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
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  params: PropTypes.shape({
    details: PropTypes.string,
    expansion: PropTypes.string,
    detailsChild: PropTypes.string
  })
};