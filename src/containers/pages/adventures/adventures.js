import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Route} from 'react-router';
import Sidebar from './left-container/sidebar';
import Adventure from './right-container/adventure';
import NotFound from '../../../components/not-found/not-found';
import SelectExtension from '../../../components/extensions/select-extension';
import {adventureExists} from '../../../utils/checkIfPathExist';
import Icon from "../../../components/icon";

const Adventures = ({match, location, windowWidth})=> {
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
          <h3 className="sidebar__header">
            {windowWidth <= 600 ? <Icon name="adventures"/> : "Adventures"}
          </h3>
          <Sidebar adventure={adventure}/>
        </div>
        {rightContainer()}
      </div>
  );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Adventures);

Adventures.propTypes = {
  params: PropTypes.shape({
    details: PropTypes.string,
    adventure: PropTypes.string
  })
};