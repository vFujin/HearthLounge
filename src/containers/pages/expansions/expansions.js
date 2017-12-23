import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Route} from 'react-router';
import Sidebar from './left-container/sidebar';
import Expansion from './right-container/expansion';
import NotFound from '../../shared-assets/not-found';
import SelectExtension from '../../shared-assets/extensions/select-extension';
import {expansionExists} from '../../../utils/checkIfPathExist'

const Expansions = ({match, location}) => {
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
          <Sidebar expansion={expansion}/>
        </div>
        {rightContainer()}
      </div>
  );
};

export default Expansions;

Expansions.propTypes = {
  params: PropTypes.shape({
    details: PropTypes.string,
    expansion: PropTypes.string,
    detailsChild: PropTypes.string
  })
};