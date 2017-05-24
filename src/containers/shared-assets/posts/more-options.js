import React from 'react';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Tooltip from 'antd/lib/tooltip';

const MoreOptions = () =>{
  const menu = (
      <Menu>
        <Menu.Item>Report</Menu.Item>
      </Menu>
  );
  return (
      <Tooltip title="More options" placement="topRight" arrowPointAtCenter>
        <div className="post-more-options">
            <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
              <ul className="options">
                <li className="peripheral"></li>
                <li className="peripheral"></li>
                <li className="peripheral"></li>
              </ul>
            </Dropdown>
        </div>
      </Tooltip>
  )
};

export default MoreOptions;