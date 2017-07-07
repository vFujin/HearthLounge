import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Sidebar from './left-container/sidebar';
import Adventure from './right-container/adventure';
import NotFound from '../../shared-assets/not-found';
import SelectExtension from '../../shared-assets/extensions/select-extension';
import {adventure_details} from '../../../data/adventure-details';

const Adventures = ({cards, params})=> {
  const {adventure, boss, details} = params;

  const rightContainer = () => {
    let path   = location.pathname.split("/")[2],
        exists = adventure_details.map(a => a.adventure).includes(path);

    if(adventure !== undefined) {
      return exists
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
  cards: PropTypes.array.isRequired,
  params: PropTypes.shape({
    details: PropTypes.string,
    adventure: PropTypes.string
  })
};