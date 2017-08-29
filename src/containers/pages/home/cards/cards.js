// you might want to rewrite components like this

// export default () => (
//  <div>
//    ...
//  </div>
// )

import React from 'react';
import { Link } from 'react-router'
const CardsBlock = () => {
  return (
      <div>
        <Link to={'/cards'}>
          <div className="icon-wrapper">
            <span className="hs-icon icon-card"></span>
          </div>
        </Link>
      </div>
  );
};

export default CardsBlock;
