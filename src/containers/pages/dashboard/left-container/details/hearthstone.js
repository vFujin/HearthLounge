import React from 'react';

import DetailHeader from './detail-header';
import IconLabel from './assets/icon-label';
import SelectLabel from './assets/select-label';

const HearthstoneDetails = ({user, handleEditClick, isEditing, handleSaveClick, handleInputChange, handleSelectChange}) => {
  const placeholder = (value, defaultValue) =>{
    return user[value] ? user[value] : defaultValue;
  };

  return(
      <li className="hearthstone">
        <DetailHeader title="hearthstone"
                      handleEditClick={handleEditClick}
                      isEditing={isEditing}
                      handleSaveClick={handleSaveClick}/>
        <div className="details-content">
          <IconLabel id="battletag"
                     title="battle tag"
                     placeholder={placeholder('battletag', 'battletag#0000')}
                     disabled={isEditing}
                     handleInputChange={handleInputChange}/>
          <SelectLabel id="classes"
                       title="favourite_class"
                       placeholder={placeholder('favourite_class', 'classes')}
                       disabled={isEditing}
                       handleSelectChange={handleSelectChange}/>
          <SelectLabel id="region"
                       title="region"
                       placeholder={placeholder('region', 'EU > NA')}
                       disabled={isEditing}
                       handleSelectChange={handleSelectChange}/>
        </div>
      </li>
  )
};

HearthstoneDetails.propTypes = {
  user: React.PropTypes.object.isRequired,
  isEditing: React.PropTypes.bool.isRequired,
  handleEditClick: React.PropTypes.func.isRequired,
  handleSaveClick: React.PropTypes.func.isRequired,
  handleInputChange: React.PropTypes.func.isRequired,
  handleSelectChange: React.PropTypes.func.isRequired
};

export default HearthstoneDetails;