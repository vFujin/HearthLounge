import React from 'react';
import Sidebar from './left-container/sidebar';

const Adventures = props => {
  const {children, params} = props,
        {adventure} = params;

  return (
      <div className="pageContainer adventures">
        <div className="left-container">
          <Sidebar adventure={adventure}/>
        </div>
        <div className='right-container'>
          <div className={`content`}>
            {children}
          </div>
        </div>
      </div>
  );
};

Adventures.propTypes = {
  children:  React.PropTypes.element,
  params:    React.PropTypes.object.isRequired,
  adventure: React.PropTypes.string
};

export default Adventures;