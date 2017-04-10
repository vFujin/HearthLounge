import React from 'react';
const DetailHeader = ({title}) =>{
  return(
      <div className="details-header">
        <h3>{title}</h3>
        <button className="btn-pearl">Edit</button>
      </div>
  )
};

DetailHeader.propTypes = {
  title: React.PropTypes.string
};

export default DetailHeader;