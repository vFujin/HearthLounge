import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from 'antd/lib/popconfirm';

const DeleteButton = ({element}) =>{
  return (
      <Popconfirm title={`Are you sure?`}
                  okText="Yes"
                  overlayClassName="popover"
                  arrowPointAtCenter={true}
                  cancelText="No">
        <button className={`component btn btn__delete`}>Delete {element}</button>
      </Popconfirm>
  )
};

export default DeleteButton;

DeleteButton.propTypes = {
  element: PropTypes.string.isRequired
};