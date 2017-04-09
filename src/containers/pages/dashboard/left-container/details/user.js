import React from 'react';

const UserDetails = props => {
  return(
      <li className="details">
        <h3>Details</h3>
        <div>
          <label htmlFor="email">
            <p>E-mail</p>
            <input id="email" type="text" value="joe@placeholder.com"/>
          </label>
          {/*<label htmlfor="signature">Signature</label>*/}
          {/*<textarea id="signature" className="signature">random text</textarea>*/}
        </div>
      </li>
  )
};

export default UserDetails;