import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import Icon from "../../../components/icon";

const HomeBlock = ({title, width, icon, children}) =>{
  const blockTitle = _.upperCase((title !== icon && title !== undefined) ? title : icon);

  return (
      <li className={`home__block ${icon} block-width-${width || 1}`}>
        <div className="home__block--header">
          <Link to={`/${icon}`}>
            <Icon name={icon}/>
            <p>{blockTitle}</p>
          </Link>
        </div>
        <div className="home__block--body">
          {children}
        </div>
      </li>
  )
};

export default HomeBlock;