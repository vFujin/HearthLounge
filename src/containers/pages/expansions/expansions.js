import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Route} from 'react-router';
import Sidebar from './left-container/sidebar';
import Expansion from './right-container/expansion';
import NotFound from '../../../components/not-found';
import SelectExtension from '../../../components/extensions/select-extension';
import {expansionExists} from '../../../utils/checkIfPathExist'
import Icon from "../../../components/icon";

const Expansions = ({match, location, windowWidth}) => {
  document.title = "Expansions";
  const expansion = location.pathname.split("/")[2];

  const rightContainer = () => {
    if (expansion) {
      return expansionExists(expansion)
        ? <Route path={`${match.url}/:expansion/:details`} component={Expansion} />
        : <NotFound page={_.startCase(expansion)} redirect="expansions"/>;
    } else {
      return <SelectExtension group="expansion"/>
    }
  };

  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">
            {windowWidth <= 600 ? <Icon name="expansions"/> : "Expansions"}
          </h3>
          <Sidebar expansion={expansion}/>
        </div>
        {rightContainer()}
      </div>
  );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Expansions);

Expansions.propTypes = {
  params: PropTypes.shape({
    details: PropTypes.string,
    expansion: PropTypes.string,
    detailsChild: PropTypes.string
  })
};