import React from 'react';
import _ from 'lodash';

const SectionHeader = ({countComments}) => {
  return (
      <div className="section__header">
        <div className="line"></div>
        <h1>{countComments} {countComments === 1 ? 'comment' : 'comments'}</h1>
      </div>
  )
};

export default SectionHeader;

//No proptypes, comments is an object with dynamic {string} `deckId` keys and array of comments object values