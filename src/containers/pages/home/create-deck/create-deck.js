import React from 'react';
import { Link } from 'react-router-dom'
const CreateDeckBlock = () => {
  return (
      <Link to={'/create-deck'}>
        <div className="icon-wrapper">
          <span className="hs-icon icon-create-deck"></span>
        </div>
      </Link>
  );
};

export default CreateDeckBlock;