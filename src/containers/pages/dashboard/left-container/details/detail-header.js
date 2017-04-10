import React from 'react';
import _ from 'lodash';
const DetailHeader = ({isEditing, handleEditClick, handleSaveClick, title}) =>{
  let editing = !isEditing ? 'Edit' : 'Cancel';
  let toggleSave = !isEditing ? 'display-none' : '';
  const capitalizedTitle = _.startCase(title);
  const snakeCasedTitle = _.snakeCase(title);

  return(
      <div className="details-header">
        <h3>{capitalizedTitle}</h3>
        <div>
          <button onClick={(e)=>handleEditClick(e)} id={`editing_${snakeCasedTitle}`} className="btn-pearl">{editing}</button>
          <button onClick={(e)=>handleSaveClick(e)} id={snakeCasedTitle}    className={`btn-pearl ${toggleSave}`}>Save</button>
        </div>
      </div>
  )
};

DetailHeader.propTypes = {
  title: React.PropTypes.string
};

export default DetailHeader;