import React from 'react';
const PreOrder = props => {
  const {topbarActiveTabUrl} = props;

  return (
      <div className={`pre-order ${topbarActiveTabUrl === 'pre-order' && 'active'}-view`}>
        preorder
      </div>
  );
};

PreOrder .propTypes = {
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default PreOrder ;