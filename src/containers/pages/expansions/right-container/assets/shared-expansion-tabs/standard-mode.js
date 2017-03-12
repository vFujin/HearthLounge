import React from 'react';

const StandardMode = props => {
  const {topbarActiveTabUrl} = props;

  return (
      <div className={`standard-mode ${topbarActiveTabUrl === 'standard-mode' && 'active'}-view`}>
        standard mode
      </div>
  );
};

StandardMode.propTypes = {
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default StandardMode;