import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from 'antd/lib/popconfirm';
import DonutLoader from "../loaders/donut/donut-loader";

const DeleteButton = ({element, handleClick, darkBorder, loading}) =>{
  return (
      <Popconfirm title={`Are you sure?`}
                  okText="Yes"
                  onConfirm={handleClick}
                  overlayClassName="popover"
                  arrowPointAtCenter={true}
                  cancelText="No">
        <button disabled={loading} className={`btn btn__delete ${darkBorder && "btn__darkBorder"}`}>{loading ? <DonutLoader /> : `Delete ${element}`}</button>
      </Popconfirm>
  )
};

export default DeleteButton;

DeleteButton.propTypes = {
  element: PropTypes.string.isRequired
};