import React from 'react';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Tooltip from 'antd/lib/tooltip';
import './styles.css';

const MoreOptions = ({commentId, activeUserId, authorId, handleCommentOptionsClick}) =>{

  const options = () =>{
    if(activeUserId === authorId) return (
        <Menu.Item key="delete" commentId={commentId}>Delete</Menu.Item>
    );
    else return (
        <Menu.Item key="flag" commentId={commentId}>Flag</Menu.Item>
    )
  };

  const menu = (
      <Menu onClick={(e) => handleCommentOptionsClick(e)}>
        {options()}
      </Menu>
  );
  return (
      <Tooltip title="More options" placement="topRight" arrowPointAtCenter>
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
          <div className="post-more-options">
              <ul className="options">
                <li className="peripheral"/>
                <li className="peripheral"/>
                <li className="peripheral"/>
              </ul>
          </div>
        </Dropdown>
      </Tooltip>
  )
};

export default MoreOptions;