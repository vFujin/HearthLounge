import React from 'react';
import Sidebar from './left-container/sidebar';

const Adventures = ({children, params})=> {
  const {adventure} = params;

  return (
      <div className="container__page container__page--twoSided adventures">
        <div className="container__page--inner container__page--left">
          <Sidebar adventure={adventure}/>
        </div>
        {children}
      </div>
  );
};

Adventures.propTypes = {
  children:  React.PropTypes.element,
  params:    React.PropTypes.object.isRequired,
  adventure: React.PropTypes.string
};

export default Adventures;