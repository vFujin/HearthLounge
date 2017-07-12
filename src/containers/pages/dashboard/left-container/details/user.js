import React from 'react';
import DetailHeader from './detail-header';
import InputLabel from './assets/input-label';

const UserDetails = ({user, handleEditClick, isEditing, handleInputChange, handleSaveClick}) => {
  return(
      <li className="details">
        <DetailHeader title="details"
                      handleEditClick={handleEditClick}
                      isEditing={isEditing}
                      handleSaveClick={handleSaveClick}/>
        <div className="details-content">
          <InputLabel id="email" title="e-mail" placeholder={user.email} disabled={isEditing} handleInputChange={handleInputChange}/>
          <label htmlFor="avatar" className="avatar">
            <p>Avatar</p>
            <input type="file" name="avatar" id="avatar" disabled={!isEditing}/>
          </label>
          {user.updatedProfile
              ? null
              : <InputLabel id="username" title="username" placeholder={user.username} disabled={isEditing} handleInputChange={handleInputChange} />
          }
        </div>
      </li>
  )
};


export default UserDetails;