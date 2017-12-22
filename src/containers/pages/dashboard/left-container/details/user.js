import React from 'react';
import DetailHeader from './detail-header';
import InputLabel from './assets/input-label';

const UserDetails = ({user, newPassword, handleEditClick, isEditing, handleInputChange, handleSaveClick}) => {
  return (
    <li className="details">
      <DetailHeader title="Account"
                    popover={true}
                    hasSaveBtn={true}
                    newPassword={newPassword}
                    handleInputChange={handleInputChange}
                    handleEditClick={handleEditClick}
                    isEditing={isEditing}
                    handleSaveClick={handleSaveClick}/>
      <div className="details-content">
        <InputLabel id="email" title="e-mail" placeholder={user.email} disabled={isEditing}
                    handleInputChange={handleInputChange}/>
        {
          !user.updatedProfile
            ? <InputLabel id="username" title="username" placeholder={user.username} disabled={isEditing}
                          handleInputChange={handleInputChange}/>
            : null
        }
        <InputLabel id="avatar" title="Avatar" placeholder={user.avatar} disabled={isEditing}
                    handleInputChange={handleInputChange}/>
        <InputLabel id="new_password" title="new password" disabled={isEditing}
                    handleInputChange={handleInputChange}/>
      </div>
    </li>
  )
};

export default UserDetails;