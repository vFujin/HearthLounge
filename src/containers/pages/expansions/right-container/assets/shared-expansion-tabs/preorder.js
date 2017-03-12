import React from 'react';
const Preorder = props => {
  const {topbarActiveTabUrl} = props;

  return (
      <div className={`pre-order ${topbarActiveTabUrl === 'pre-order' && 'active'}-view`}>
        preorder
      </div>
  );
};

Preorder.propTypes = {
  topbarActiveTabUrl: React.PropTypes.string.isRequired
};

export default Preorder;