import React from 'react';

const UserDetails = props => {

  return(
      <li className="details">
        <h3>Details</h3>
        <div className="details-content">
          <label htmlFor="email">
            <p>E-mail</p>
            <input id="email" type="text" value="joe@placeholder.com"/>
          </label>
        </div>
      </li>
  )
};


export default UserDetails;