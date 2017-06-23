import React from 'react';
import { Link } from 'react-router'
const CardsBlock = () => {
  return (
        <Link to={'/cards'} >
          <div className="header">Cards</div>
          <div className="icon">
            <span className="hs-icon icon-card"></span>
          </div>
        </Link>
  );
};

export default CardsBlock;