import React from 'react';

const GeneralDetails = ({username, rank}) =>{
  return (
      <div className="general-info-wrapper">
        <p>{username}</p>
        <p>{rank}</p>
      </div>
  )
};

export default GeneralDetails;