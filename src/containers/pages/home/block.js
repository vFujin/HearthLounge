import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';

const HomeBlock = ({title, width, icon, children}) =>{
  return (
      <li className={`home__block ${icon} block-width-${width || 1}`}>
        <div className="home__block--header">
          <Link to={`/${icon}`}>
            <span className={`hs-icon icon-${icon}`}></span>
            <p>{_.upperCase(title || icon)}</p>
          </Link>
        </div>
        <div className="home__block--body">
          {children}
        </div>
      </li>
  )
};

export default HomeBlock;