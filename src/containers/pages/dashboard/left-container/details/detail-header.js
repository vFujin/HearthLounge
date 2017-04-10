import React from 'react';
import _ from 'lodash';
const DetailHeader = ({isEditing, handleEditClick, title}) =>{
  let editing = !isEditing ? 'Edit' : 'Cancel editing';
  const capitalizedTitle = _.startCase(title);
  const snakeCasedTitle = _.snakeCase(title);

  return(
      <div className="details-header">
        <h3>{capitalizedTitle}</h3>
        <div>
          <button onClick={(e)=>handleEditClick(e)} id={`editing_${snakeCasedTitle}`} className="btn-pearl">{editing}</button>
          <button id={`save_${snakeCasedTitle}`} className={`btn-pearl ${!isEditing ? 'display-none' : ''}`}>Save</button>
        </div>
      </div>
  )
};

DetailHeader.propTypes = {
  title: React.PropTypes.string
};

export default DetailHeader;