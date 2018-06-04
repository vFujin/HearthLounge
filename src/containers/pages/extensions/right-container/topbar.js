import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Topbar = ({details, extension}) => {
  const {extension_topbar_tabs} = extension;

  const listExtensionDetailTabs = () =>{
    return extension_topbar_tabs.map((detail, index) =>
      <li key={index} className={`${extension.url} ${details === detail.url && 'active'}`}>
        <Link to={`/extensions/${extension.url}/${detail.url}`}>
          {detail.name}
        </Link>
      </li>
    );
  };

  return (
    <div className='topbar'>
      <ul className="topbar__extension-navigation">
        {listExtensionDetailTabs()}
      </ul>
    </div>
  );
};


export default Topbar;

Topbar.propTypes = {
  details: PropTypes.string.isRequired,
  extension: PropTypes.object.isRequired
};
