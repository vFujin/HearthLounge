import React from 'react';
import Sidebar from './left-container/sidebar';

const Expansions = props => {
  const {children, params} = props;
  const {expansion} = params;

  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <Sidebar expansion={expansion}/>
        </div>
        <div className="container__page--inner container__page--right">
          {children}
        </div>
      </div>
  );
};

Expansions.propTypes = {
  children: React.PropTypes.element,
  params: React.PropTypes.object
};

export default Expansions;