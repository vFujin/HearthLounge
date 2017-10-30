import React from 'react';
import Loader from "../loaders/loader";
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

  return <button onClick={handleClick} className={`component btn btn__submit btn__darkBorder${err ? 'btn__failure' : ''} ${response ? 'btn__success' : ''} ${className}`}>{status()}</button>
};

export default UploadStatusBtn;

UploadStatusBtn.propTypes = {
  uploadStateKey: PropTypes.object.isRequired,
  buttonValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string
};