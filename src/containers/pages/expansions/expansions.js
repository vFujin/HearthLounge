import React from 'react';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';

const Expansions = props => {
  const {children, params} = props;
  const {details, expansion} = params;

  return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <Sidebar expansion={expansion}/>
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar expansion={expansion} details={details}/>
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