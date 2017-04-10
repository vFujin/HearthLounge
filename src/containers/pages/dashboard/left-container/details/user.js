import React from 'react';
import DetailHeader from './detail-header';
const UserDetails = props => {

  return(
      <li className="details">
        <DetailHeader title="details"/>
        <div className="details-content">
          <label htmlFor="email">
            <p>E-mail</p>
            <input id="email" type="text" value={props.email}/>
          </label>
        </div>
      </li>
  )
};


export default UserDetails;