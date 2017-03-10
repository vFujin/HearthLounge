import React from 'react';
import { Link } from 'react-router';
const ExtensionsBlock = () => {
  return (
      <li className={'home__block expansions block-width-2'}>
        <Link to={'/expansions'}>
          <div className="header">Extensions</div>
        </Link>
        <div className="slider">
          <ul>
            <li>
              <img
                  src="https://raw.githubusercontent.com/xNehel/HearthLounge/master/src/images/adventures/blackrock-mountain.jpg"
                  alt="bm"/>
            </li>
          </ul>
          <div className="slider-nav">
            <div className="prev">&#10094;</div>
            <div className="next">&#10095;</div>
            <div className="bullets">
              <ul>
                <li>&#8226;</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
  );
};

export default ExtensionsBlock;