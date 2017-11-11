import React from 'react';

const GeneralDetails = ({deckAuthor}) =>{
  const {username, rank} = deckAuthor;
  return (
      <div className="general-info-wrapper">
        <p>{username}</p>
        <p>{rank}</p>
      </div>
  )
};

export default GeneralDetails;