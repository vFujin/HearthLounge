import React from 'react';
import {Link} from 'react-router-dom';

const Summary = () =>{
  return (
    <div className="summary">
      <p>Sign Up Complete!</p>
      <br />
      <p>On your <Link to="/dashboard">profile page</Link> you can edit your user info.</p>
    </div>
  )
};

export default Summary;