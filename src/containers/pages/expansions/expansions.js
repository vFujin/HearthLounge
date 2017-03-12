import React from 'react';
import Sidebar from './left-container/sidebar';

const Expansions = props => {
  const {children, params} = props;
  const {expansion} = params;

  return (
      <div className="pageContainer expansions">
        <div className="left-container">
          <Sidebar expansion={expansion}/>
        </div>
        <div className="right-container">
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