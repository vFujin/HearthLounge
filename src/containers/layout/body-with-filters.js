import React from 'react';
import Sidebar from "./assets/sidebar";
import Topbar from "./assets/topbar";

const BodyWithFilters = props => {

  return (
    <div className={`container__page ${props.page}`}>
      <div className="container__page--inner container__page--left">
        <Sidebar/>
      </div>
      <div className="container__page--inner container__page--right">
        <Topbar/>
      </div>
    </div>
  );
};

export default BodyWithFilters;