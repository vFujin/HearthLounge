import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Tooltip from 'antd/lib/tooltip';
import _ from 'lodash';
import {supported_domain_icons} from '../../../../../utils/reddit/posts';
import Icon from "../../../../../components/icon";

const Topbar = ({category, domain}) => {
  const checkIcon = (supportedDomain) =>{
    return supportedDomain === "bubbles2" ? "hearthstone" : supportedDomain;
  };

  return (
    <ul className="topbar">
      {supported_domain_icons.map(supportedDomain=>
        <li key={supportedDomain} id={supportedDomain}>
          <Link to={`/reddit/posts/${category}/${supportedDomain === "bubbles2" ? "hearthstone" : supportedDomain}`}>
            <Tooltip title={_.upperFirst(checkIcon(supportedDomain))} placement="bottom">
              <Icon name={supportedDomain} className={`${supportedDomain} ${supportedDomain === domain ? "active" : ""}`} />
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