import React from 'react';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Tooltip from 'antd/lib/tooltip';

const MoreOptions = ({commentId, handleCommentOptionsClick}) =>{

  const menu = (
      <Menu onClick={(e) => handleCommentOptionsClick(e)}>
        <Menu.Item key="delete" commentId={commentId}>Delete</Menu.Item>
        <Menu.Item key="flag" commentId={commentId}>Flag</Menu.Item>
      </Menu>
  );
  return (
      <Tooltip title="More options" placement="topRight" arrowPointAtCenter>
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
          <div className="post-more-options">
              <ul className="options">
                <li className="peripheral"></li>
                <li className="peripheral"></li>
                <li className="peripheral"></li>
              </ul>
          </div>
        </Dropdown>
      </Tooltip>
  )
};

export default MoreOptions;