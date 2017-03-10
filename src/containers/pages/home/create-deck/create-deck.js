import React from 'react';
import { Link } from 'react-router'
const CreateDeckBlock = () => {
  return (
      <li className={'home__block create-deck block-width-1'}>
        <Link to={'/create-deck'}>
          <div className="header">Create deck</div>
          <div className="icon">
            <span className="hs-icon icon-create-deck"></span>
          </div>
        </Link>

      </li>
  );
};

export default CreateDeckBlock;