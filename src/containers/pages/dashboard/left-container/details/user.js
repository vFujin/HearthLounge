import React from 'react';
import DetailHeader from './detail-header';
const UserDetails = ({email, handleEditClick, isEditing}) => {

  return(
      <li className="details">
        <DetailHeader title="details" handleEditClick={handleEditClick} isEditing={isEditing}/>
        <div className="details-content">
          <label htmlFor="email">
            <p>E-mail</p>
            <input id="email" type="text" value={email}/>
          </label>
        </div>
      </li>
  )
};


export default UserDetails;