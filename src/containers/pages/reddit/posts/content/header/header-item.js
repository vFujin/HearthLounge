import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RedditHeaderItem = ({name}) => (
  <li className={`redditPosts__snippet--${name}`} key={name}>{_.startCase(name)}</li>
);

RedditHeaderItem.propTypes = {
  name: PropTypes.string.isRequired
};

RedditHeaderItem.defaultProps = {
  name: undefined
};

export default RedditHeaderItem;