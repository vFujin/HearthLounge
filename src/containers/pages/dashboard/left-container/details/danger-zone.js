import React from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './detail-header';
import Button from "../../../../../components/buttons/button";

const DangerZone = ({isEditing, reauthPassword, handleDeleteAccountClick, handleReauthenticationClick, handleEditClick, handleInputChange}) =>{

  const isDisabled = ((!isEditing && reauthPassword.length >= 0) || (isEditing && reauthPassword.length === 0)) ? "disabled" : "update";


  return (
      <li className="danger-zone">
        <DetailHeader isEditing={isEditing}
                      handleEditClick={handleEditClick}
                      handleSaveClick={handleDeleteAccountClick}
                      hasSaveBtn={false}
                      btnText="Delete"
                      title="Delete Account"/>
        <div className="details-content">
          <label htmlFor="reauthPassword">
            <Button text="Reauthenticate"
                    type={isDisabled}
                    handleClick={handleReauthenticationClick}/>
            <div className="wrapper">
              <input onChange={handleInputChange}
                     type="password"
                     placeholder="password"
                     disabled={!isEditing}
                     id="reauthPassword" value={reauthPassword}/>
            </div>
          </label>
        </div>
      </li>
  )
};

export default DangerZone;

DangerZone.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleDeleteAccountClick: PropTypes.func.isRequired,
  handleReauthenticationClick: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired
};