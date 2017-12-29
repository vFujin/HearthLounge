import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';

const Button = ({id, activeUser, text, handleClick, type, darkBorder, active, tooltip = false, tooltipTitle = "You have to be Signed In!", tooltipPlacement = "bottom", dataAttr, requiresAuth = true}) =>{
  const disabled = requiresAuth
    && (type === "submit" || type === "submit--light")
    && (!activeUser || !activeUser.authenticated)
    && true;
  const btnType = type || "default";
  const className = `component btn btn__${btnType} ${darkBorder ? "btn__darkBorder" : undefined} ${active ? `btn__${btnType}--active` : undefined}`;

  const btn = () =>{
    return (
      <button id={id}
              disabled={disabled}
              data-attr={dataAttr}
              className={className}
              onClick={handleClick}>
        {text}
      </button>
    )
  };

  if(tooltip || disabled) {
    return (
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        {btn()}
      </Tooltip>
    )
  }
  return btn();
};

const mapStateToProps = state =>{
  const {activeUser} = state.users;
  return {activeUser};
};

export default connect(mapStateToProps, null)(Button);

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  handleClick: PropTypes.func,
  type: PropTypes.string,
  darkBorder: PropTypes.bool,
  active: PropTypes.bool,
  tooltip: PropTypes.bool,
  tooltipTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  tooltipPlacement: PropTypes.string,
  dataAttr: PropTypes.string,
  requiresAuth: PropTypes.bool
};