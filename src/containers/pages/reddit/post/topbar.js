import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../components/icon";

const Topbar = ({post}) => {
  const {score, url} = post;

  return (
      <div className="topbar">
        {score}
        <a href={url} rel="noopener noreferrer" target="_blank">
            <Icon name="redirect" tooltip={true} title="View on Reddit"/>
        </a>
      </div>
  )
};

export default Topbar;

Topbar.propTypes = {
  post: PropTypes.shape({
    score: PropTypes.number,
    url: PropTypes.string
  })
};