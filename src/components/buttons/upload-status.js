import React from 'react';
import Loader from "../loader";
import PropTypes from 'prop-types';

const UploadStatusBtn = ({uploadStateKey, buttonValue, handleClick, className}) => {
  const {loading, response, err} = uploadStateKey;

  const status = () =>{
    if(loading){
      return <Loader/>
    }

    if(response || response === 200){
      return '✓';
    }

    if(err){
      return "X"
    }

    return buttonValue;
  };

  return <button onClick={handleClick} className={`component btn btn-pearl btn__submit ${className}`}>{status()}</button>
};

export default UploadStatusBtn;

UploadStatusBtn.propTypes = {
  uploadStateKey: PropTypes.object.isRequired,
  buttonValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};