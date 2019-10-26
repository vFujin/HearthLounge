import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Icon, colors } from 'hearthlounge-design-system';

const HomeBlock = ({ title, width, icon, page, children }) => {
  const blockTitle = _.upperCase(
    title !== icon && title !== undefined ? title : icon
  );

  return (
    <li
      className={`home__block ${
        icon === 'extensions' ? 'expansions' : icon
      } block-width-${width || 1}`}
    >
      <div className="home__block--header">
        <Link to={`/${page ? page : icon}`}>
          <Icon name={icon} />
          <p style={{ color: colors.neutral50 }}>{blockTitle}</p>
        </Link>
      </div>
      <div className="home__block--body">{children}</div>
    </li>
  );
};

export default HomeBlock;
