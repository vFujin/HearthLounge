import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import Content from './right-container/content'

const Expansions = ({cards, params}) => {
  const {details, expansion} = params;

  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <Sidebar expansion={expansion}/>
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar expansion={expansion} details={details}/>
          <Content cards={cards} details={details} expansion={expansion}/>
        </div>
      </div>
  );
};

export default Expansions;

Expansions.propTypes = {
  children: PropTypes.element.isRequired,
  params: PropTypes.shape({
    details: PropTypes.string,
    expansion: PropTypes.string
  })
};