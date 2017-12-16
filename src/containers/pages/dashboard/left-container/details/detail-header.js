import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const DetailHeader = ({isEditing, handleEditClick, handleSaveClick, title, hasSaveBtn}) =>{
  let editing = !isEditing ? 'Edit' : 'Cancel';
  let toggleSave = !isEditing ? 'display-none' : '';

  const capitalizedTitle = _.startCase(title);
  const snakeCasedTitle = _.snakeCase(title);

  return(
      <div className="details-header">
        <h3>{capitalizedTitle}</h3>
        <div>
          <button onClick={(e)=>handleEditClick(e)} id={`editing_${snakeCasedTitle}`} className="btn btn__default">{editing}</button>
          {hasSaveBtn === false
              ?  null
              : <button onClick={(e)=>handleSaveClick(e)} id={snakeCasedTitle} className={`btn btn__update btn__darkBorder ${toggleSave}`}>Save</button>}
        </div>
      </div>
  )
};

export default DetailHeader;

DetailHeader.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};