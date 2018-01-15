import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Route} from 'react-router';
import Sidebar from './left-container/sidebar';
import Adventure from './right-container/adventure';
import NotFound from '../../../components/not-found';
import SelectExtension from '../../../components/extensions/select-extension';
import {adventureExists} from '../../../utils/checkIfPathExist';

const Adventures = ({match, location})=> {
  document.title = "Adventures";
  let adventure = location.pathname.split("/")[2];

  const rightContainer = () => {
    if(adventure) {
      return adventureExists(adventure)
          ? <Route path={`${match.url}/:adventure/:details`} component={Adventure} />
          : <NotFound page={_.startCase(adventure)} redirect="adventures"/>
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
  params: PropTypes.shape({
    details: PropTypes.string,
    adventure: PropTypes.string
  })
};