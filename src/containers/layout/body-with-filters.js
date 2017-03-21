import React from 'react';

const BodyWithFilters = props => {
  const {main, page, sidebar, topbar} = props;

  return (
    <div className={`container__page ${page}`}>
      <div className="container__page--inner container__page--left">
        <div className="sidebar">
          <h3 className="filter-header">Filters</h3>
          {sidebar}
        </div>
      </div>
      <div className="container__page--inner container__page--right">
        <div className="topbar">
          {topbar}
        </div>
        {main}
      </div>
    </div>
  );
};

export default BodyWithFilters;