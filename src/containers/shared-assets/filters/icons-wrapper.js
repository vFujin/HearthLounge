import React from 'react';

export const IconsWrapper = (props) => {
  return (
      <div>
        <span className={`hs icon-${props.icon_name} ${props.element_name}`}></span>
        <div className="tooltip">
          <div className="caret-up"></div>
          <p>{props.label}</p>
        </div>
      </div>
  );
};