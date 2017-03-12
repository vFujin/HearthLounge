import React from 'react';

const Arena = props => {
  const {topbarActiveTabUrl} = props;

  return (
      <div className={`arena ${topbarActiveTabUrl === 'arena' && 'active'}-view`}>
        arena
      </div>
  );
};

Arena.propTypes = {
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default Arena;