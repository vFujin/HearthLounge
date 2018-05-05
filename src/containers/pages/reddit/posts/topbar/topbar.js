import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import {supportedDomains, categories} from '../../utils/posts';
import Icon from "../../../../../components/icon";


const Topbar = ({posts, handleDomainClick, handleCategoryClick}) => {
  const {activeCategory, domain} = posts;
  return (
    <div className="topbar">
      <ul className="topbar-left">
        {supportedDomains.map((supportedDomain, i)=>
          <li key={i} id={supportedDomain.icon} onClick={(e) => handleDomainClick(e, supportedDomain)}>
            <Icon name={supportedDomain.icon}
                  domain={supportedDomain.name}
                  type="reddit"
                  className={`${supportedDomain.icon} ${supportedDomain.icon === domain.active ? "active" : ""}`} />
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
                    className={`mage ${category.name === activeCategory ? "active" : ""}`} />
          </li>
        )}
      </ul>
    </div>
  )
};

const mapStateToProps = state => {
  const { posts } = state.redditPosts;
  return { posts };
};

export default connect(mapStateToProps)(Topbar);