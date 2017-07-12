import React from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './detail-header';
// import InputLabel from './assets/input-label';

const DangerZone = ({isEditing, reauthPassword, handleDeleteAccountClick, handleReauthenticationClick, handleEditClick, handleInputChange, handleSaveClick}) =>{


  return (
      <li className="danger-zone">
        <DetailHeader isEditing={isEditing}
                      handleEditClick={handleEditClick}
                      handleSaveClick={handleSaveClick}
                      hasSaveBtn={false}
                      title="danger zone"/>
        <div className="details-content">

          <label htmlFor="reauthPassword">
            <button onClick={handleDeleteAccountClick}
                    disabled={!isEditing && (reauthPassword !== null && reauthPassword.length > 3)}>Delete account</button>
            <div className="wrapper">
              <input onChange={handleInputChange}
                     type="password"
                     disabled={!isEditing}
                     id="reauthPassword" value={reauthPassword}/>
              <br/>
              <button type="submit" onClick={handleReauthenticationClick}>Reauthenticate</button>
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