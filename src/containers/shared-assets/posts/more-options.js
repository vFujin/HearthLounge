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
      <Tooltip title="More options" placement="bottomRight" arrowPointAtCenter>
        <div className="post-more-options">
            <Dropdown overlay={menu} placement="bottomLeft">
              <ul className="options">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Dropdown>
        </div>
      </Tooltip>
  )
};

export default MoreOptions;