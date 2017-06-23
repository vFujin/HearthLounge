import React from 'react';
import { Link } from 'react-router'
const CreateDeckBlock = () => {
  return (
      <Link to={'/create-deck'}>
        <span className="hs-icon icon-create-deck"></span>
      </Link>
  );
};

export default CreateDeckBlock;