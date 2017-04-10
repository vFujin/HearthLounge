import React from 'react';
import DetailHeader from './detail-header';
import InputLabel from './assets/input-label';

const UserDetails = ({email, handleEditClick, isEditing, handleInputChange, handleSaveClick}) => {
  return(
      <li className="details">
        <DetailHeader title="details"
                      handleEditClick={handleEditClick}
                      isEditing={isEditing}
                      handleSaveClick={handleSaveClick}/>
        <div className="details-content">
          <InputLabel id="email" title="e-mail" value={email} disabled={isEditing} handleInputChange={handleInputChange}/>
        </div>
      </li>
  )
};


export default UserDetails;