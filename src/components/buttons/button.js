import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import DonutLoader from "../loaders/donut/donut-loader";

const Button = ({id, activeUser, text, handleClick, type, darkBorder, active, tooltip = false, tooltipTitle = "You have to be Signed In!", tooltipPlacement = "bottom", dataAttr, requiresAuth = true, loading}) =>{
  const isNotAuth = requiresAuth
    && (type === "submit" || type === "submit--light")
    && (!activeUser || !activeUser.authenticated)
    && true;
  const btnType = type || "default";
  const btnActive = active ? `btn__${btnType}--active` : undefined;
  const btnBorder = darkBorder ? "btn__darkBorder" : undefined;
  const btnLoading = loading ? "btn__loading" : undefined;

  const className = `btn btn__${btnType} ${btnBorder} ${btnActive} ${btnLoading}`;

  const btn = () => (
    <button id={id}
            disabled={isNotAuth || loading}
            data-attr={dataAttr}
            className={className}
            onClick={handleClick}>
      {loading ? <DonutLoader /> : text}
    </button>
  );

  if(tooltip || isNotAuth) {
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
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
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