import React from 'react';
import Tooltip from 'antd/lib/tooltip';

/**
 * Wraps element into ant-design Tooltip to give label in tooltip on hover.
 *
 * @param {number} score - The net-score of the post
 * @param {string} placement - Position of the tooltip (https://ant.design/components/tooltip/#Common-API)
 * @returns {XML}
 */
export const wrapScore = (score, placement) =>{
  return (
      <Tooltip title="score" placement={placement || 'bottom'}>
        {score}
      </Tooltip>
  )
};