import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';
import {supported_domain_icons} from '../../../../../utils/reddit/posts';

const Topbar = ({location, handleDomainClick}) => {
  const {domain} = location.query;

  const checkIcon = (supportedDomain) =>{
    return supportedDomain === "bubbles2" ? "hearthstone" : supportedDomain;
  };

  return (
    <ul className="topbar">
      {supported_domain_icons.map((supportedDomain, index)=>
        <li key={supportedDomain} onClick={handleDomainClick} id={supportedDomain}>
          <Link>
            <Tooltip title={_.upperFirst(checkIcon(supportedDomain))} placement="bottom">
              <span className={`hs-icon icon-${supportedDomain} ${supportedDomain} ${supportedDomain === domain ? "active" : ""}`}></span>
            </Tooltip>
          </Link>
        </li>
      )}
    </ul>
  )
};

export default Topbar;

Topbar.propTypes = {
  location: PropTypes.shape({
    query: PropTypes.shape({
      domain: PropTypes.string
    })
  }),
  handleDomainClick: PropTypes.func
};