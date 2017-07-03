import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import _ from 'lodash';
import {supported_domain_icons} from '../../../../../utils/reddit/posts';

const Topbar = ({location, handleDomainClick}) => {
  let query = location.query.domain;

  const checkIcon = (domain) =>{
    if(domain === "bubbles2"){
      return "hearthstone"
    }
    else return domain;
  };

  return (
        <ul className="topbar">
        {supported_domain_icons.map((domain, index)=>
          <li key={domain} onClick={handleDomainClick} id={domain}>
            <Link to={{pathname: 'reddit', query: {domain: checkIcon(domain)}}}>
              <Tooltip title={_.upperFirst(checkIcon(domain))} placement="bottom">
                <span className={`hs-icon icon-${domain} ${domain} ${domain === query ? "active" : ""}`}></span>
              </Tooltip>
            </Link>
          </li>
        )}
        </ul>
  )
};

export default Topbar;