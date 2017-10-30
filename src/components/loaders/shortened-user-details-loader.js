import React from 'react';

const ShortenedUserDetailsLoader = () => {
  const usernameWidth = Math.floor(Math.random() * 80) + 30;
  const rankWidth = Math.floor(Math.random() * 25) + 10;
  return (
      <div className="component simplifiedUser">
        <div className="simplifiedUser__avatar">
          <div className="simplifiedUser__avatar--placeholder"></div>
        </div>
        <div className="simplifiedUser__details">
          <div className="simplifiedUser__details--username">
            <div className="simplifiedUser__details--username-placeholder" style={{width: `${usernameWidth}%`}}></div>
          </div>
          <div className="simplifiedUser__details--rank">
            <div className="simplifiedUser__details--rank-placeholder" style={{width: `${rankWidth}%`}}></div>
          </div>
        </div>
      </div>
  )
};

export default ShortenedUserDetailsLoader;