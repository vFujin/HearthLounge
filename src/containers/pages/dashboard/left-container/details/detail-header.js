import React from 'react';
import Popover from 'antd/lib/popover';
import PropTypes from 'prop-types';
import _ from 'lodash';

const DetailHeader = ({isEditing, handleEditClick, handleSaveClick, title, hasSaveBtn, btnText, handleInputChange, popover, newPassword}) =>{
  let editing = !isEditing ? 'Edit' : 'Cancel';
  let toggleSave = !isEditing ? 'display-none' : '';

  const capitalizedTitle = _.startCase(title);
  const snakeCasedTitle = _.snakeCase(title);

  const Content = () =>{
    return (
      <div className="wrapper">
        <input onChange={(e)=>handleInputChange(e)} type="password" id="confirm_new_password" />
        <button onClick={(e)=>handleSaveClick(e)}
              id={snakeCasedTitle}
              className={`btn btn__update btn__darkBorder`}>Confirm</button>
      </div>
    )
  };

  const hasPopover = () => {
    if(hasSaveBtn && popover) {
      return (
        <Popover
          content={<Content/>}
          title="Confirm password"
          trigger="click"
          visible={isEditing && newPassword.length > 0}>
          {isEditing && <button className={`btn btn__update btn__darkBorder`}>Save</button>}
        </Popover>
      )
    }
    else {
      return (
        <button onClick={(e)=>handleSaveClick(e)}
                id={snakeCasedTitle}
                className={`btn btn__${btnText ? "delete" : "update"} btn__darkBorder ${toggleSave}`}>{btnText || "Save"}</button>
      )

    }
  };


  return(
      <div className="details-header">
        <h3>{capitalizedTitle}</h3>
        <div>
          <button onClick={(e)=>handleEditClick(e)} id={`editing_${snakeCasedTitle}`} className={`btn btn__default${isEditing ? "--active" : ""} btn__darkBorder`}>{editing}</button>
          {hasPopover()}
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