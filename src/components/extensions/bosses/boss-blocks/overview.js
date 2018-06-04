import React from 'react';
import PropTypes from 'prop-types';
import ExtensionBossImg from "../../../images/adventure-boss";

const Overview = ({extension, wing, boss}) => {
  return (
    <div className="container__blocks--block-content overview">
      <ExtensionBossImg extension={extension} wing={wing.url} boss={boss}/>
      <p><span>{boss.name}</span> is a part of <span>{wing.wing_title}</span> wing</p>
    </div>
  )
};

export default Overview;

Overview.propTypes = {
  extension: PropTypes.string.isRequired,
  wing: PropTypes.shape({
    wing_title: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  boss: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
};
