import React from 'react';
const Overview = props => {
  const {expansion, topbarActiveTabUrl} = props;

  return (
      <div className={`overview ${topbarActiveTabUrl === 'overview' && 'active'}-view`}>
        <img
            src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/expansions/${expansion}.jpg`}
            alt={expansion}/>
      </div>
  );
};

Overview.propTypes = {
  expansion: React.PropTypes.string.isRequired,
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default Overview;