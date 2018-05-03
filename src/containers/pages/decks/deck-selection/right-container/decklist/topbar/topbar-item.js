import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const TopbarItem = ({title, className}) => {
  return (
      <li className={`decks__decklist--snippet-${className || title}`}>{_.startCase(title)}</li>
  )
};

TopbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

TopbarItem.defaultProps = {
  title: undefined,
  className: undefined
};

export default TopbarItem;