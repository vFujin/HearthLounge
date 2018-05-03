import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {supported_domain_icons, categories} from '../utils/posts';
import Icon from "../../../../components/icon";


const Topbar = ({category, domain, handleCategoryClick}) => {

  return (
    <div className="topbar">
      <ul className="topbar-left">
        {supported_domain_icons.map(supportedDomain=>
          <li key={supportedDomain} id={supportedDomain}>
            <Icon name={supportedDomain} domain={supportedDomain} type="reddit" className={`${supportedDomain} ${supportedDomain === domain ? "active" : ""}`} />
          </li>
        )}
      </ul>
      <ul className="topbar-right">
        {categories.map((category, i)=>
          <li key={i}
              onClick={handleCategoryClick}
              id={category.name}>
              <Icon name={category.icon}
                    tooltip={true}
                    tooltipPlacement="bottom"
                    title={_.startCase(category.name)}

                    className={`${category.icon} ${category.name === domain ? "active" : ""}`} />
          </li>
        )}
      </ul>
    </div>
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