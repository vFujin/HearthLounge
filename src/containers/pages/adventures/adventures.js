import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import Adventure from './right-container/adventure';
import NotFound from '../../shared-assets/not-found';
import SelectExtension from '../../shared-assets/extensions/select-extension';
import {adventureExists} from '../../../utils/checkIfPathExist';

const Adventures = ({cards, params})=> {
  const {adventure, boss, details} = params;

  const rightContainer = () => {
    let path = location.pathname.split("/")[2];

    if(adventure !== undefined) {
      return adventureExists(path)
          ? <Adventure cards={cards} details={details} boss={boss} adventure={adventure}/>
          : <NotFound page={_.startCase(adventure)} redirect="expansions"/>
    }
    return <SelectExtension group="adventure"/>
  };

  return (
      <div className="container__page container__page--twoSided adventures">
        <div className="container__page--inner container__page--left">
          <Sidebar adventure={adventure}/>
        </div>
        {rightContainer()}
      </div>
  );
};

export default Adventures;

Adventures.propTypes = {
  cards: PropTypes.shape({
    sets: PropTypes.objectOf(PropTypes.array)
  }),
  params: PropTypes.shape({
    details: PropTypes.string,
    adventure: PropTypes.string
  })
};