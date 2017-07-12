import React from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './detail-header';

const DangerZone = ({isEditing, handleEditClick, handleSaveClick}) =>{
  return (
      <li className="danger-zone">
        <DetailHeader isEditing={isEditing}
                      handleEditClick={handleEditClick}
                      handleSaveClick={handleSaveClick}
                      title="danger zone"/>
        <div className="details-content">
          <button>Delete account</button>
        </div>
      </li>
  )
};

export default DangerZone;

DangerZone.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired
};