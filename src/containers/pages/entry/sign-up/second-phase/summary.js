import React from 'react';
import {Link} from 'react-router';

const Summary = () =>{
  return (
    <div className="summary">
      <p>Sing Up Complete!</p>
      <br />
      <p>On your <Link to="/dashboard">profile page</Link> you can edit your user info.</p>
    </div>
  )
};

export default Summary;