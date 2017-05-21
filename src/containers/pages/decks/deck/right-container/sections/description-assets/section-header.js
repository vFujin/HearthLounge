import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({title}) => {

  return (
      <div className="section__header">
        <div className="line"></div>
        <h1>{title}</h1>
      </div>
  )
};

export default SectionHeader;