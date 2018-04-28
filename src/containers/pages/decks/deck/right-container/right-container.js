import React from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({params}) => (
  <div className="container__page--inner container__page--right">
    <Topbar />
    <Content params={params}/>
  </div>
);

export default RightContainer;

RightContainer.propTypes = {
  params: PropTypes.object
};