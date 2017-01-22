import React from 'react';

export const IconsWrapper = (props) => {
  return (
      <div>
        <span className={`${props.active === props.index && 'active'} hs icon-${props.icon_name} ${props.element_name}`} data-filter={props.data}></span>
        <div className="tooltip" data-filter={props.data}>
          <div className="caret-up" data-filter={props.data}></div>
          <p data-filter={props.data}>{props.label}</p>
        </div>
      </div>
  );
};