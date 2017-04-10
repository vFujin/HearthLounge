import React from 'react';
import DetailHeader from './detail-header';
import InputLabel from './assets/input-label';

const UserDetails = ({email, handleEditClick, isEditing}) => {

  return(
      <li className="details">
        <DetailHeader title="details" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <InputLabel id="email" title="e-mail" value={email}/>
        </div>
      </li>
  )
};


export default UserDetails;