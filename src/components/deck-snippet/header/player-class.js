import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../icons/icon";

export const DSPlayerClass = ({hsClass}) => {
  return (
    <div className="deckSnippet__header--hsClass">
      <Icon name={hsClass}/>
    </div>
  );
};

export default DSPlayerClass;

DSPlayerClass.propTypes = {
  hsClass: PropTypes.string.isRequired
};