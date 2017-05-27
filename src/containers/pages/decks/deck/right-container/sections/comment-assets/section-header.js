import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const SectionHeader = ({comments}) => {
  let countComments = _.map(Object.values(comments)[0]).length;
  return (
      <div className="section__header">
        <div className="line"></div>
        <h1>{countComments || 0} {countComments === 1 ? 'comment' : 'comments'}</h1>
      </div>
  )
};

export default SectionHeader;