import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/css';
import _ from 'lodash';
import {supported_domain_icons} from '../../domain-icons';

const Topbar = (props) => {
  let query = props.location.query.domain;

  checkIcon = (domain) =>{
    if(domain === "bubbles2"){
      return "hearthstone"
    }
    else return domain;
  };

  return (
      <div className="topbar">
        <ul>
        {supported_domain_icons.map((domain, index)=>
          <li key={domain}>
            <Link to={{pathname: 'reddit', query: {category: props.active_tabmenu, domain: checkIcon(domain)}}}>
              <Tooltip title={_.upperFirst(checkIcon(domain))} placement="bottom">
                <span className={`hs-icon icon-${domain} ${domain} ${domain === query ? "active" : ""}`}></span>
              </Tooltip>
            </Link>
          </li>
        )}
        </ul>
      </div>
  )
};

export default Topbar;