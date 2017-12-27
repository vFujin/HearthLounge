import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';

const Button = ({text, handleClick, type, darkBorder, active, tooltip = false, tooltipTitle, tooltipPlacement = "bottom", dataAttr}) =>{
  const disabled = type === 'disabled' ? true : null;
  const btnType = type || "default";

  if(tooltip) {
    return (
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        <button disabled={disabled}
                data-attr={dataAttr}
                className={`component btn btn__${btnType} ${darkBorder ? "btn__darkBorder" : undefined} ${active ? `btn__${btnType}--active` : undefined}`}
                onClick={handleClick}>
          {text}
        </button>
      </Tooltip>
    )
  }
  return (
    <button disabled={disabled}
            data-attr={dataAttr}
            className={`component btn btn__${btnType} ${darkBorder ? "btn__darkBorder" : undefined} ${active ? `btn__${btnType}--active` : undefined}`}
            onClick={handleClick}>
      {text}
    </button>
  )
};

export default Button;

Button.propTypes = {
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
  dataAttr: PropTypes.string
};