import React from 'react';
import { Link } from 'react-router'
const CardsBlock = () => {
  return (
      <li className={'home__block cards block-width-1'}>
        <Link to={'/cards'}>
          <div className="header">Cards</div>
          <div className="icon">
            <span className="hs-icon icon-card"></span>
          </div>
        </Link>
      </li>
  );
};

export default CardsBlock;