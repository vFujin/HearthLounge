import React from 'react';
import PropTypes from "prop-types";

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

GeneralDetails.propTypes = {
  deckAuthor: PropTypes.shape({
    username: PropTypes.string,
    rank: PropTypes.number
  })
};