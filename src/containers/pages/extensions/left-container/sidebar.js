import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import {Link} from 'react-router-dom';
import Icon from "../../../../components/icon";
import {connect} from "react-redux";
import Loader from "../../../../components/loaders/diamond/loader";

const Sidebar = ({extensionPath, info}) => {
  const localStorageExtensions = localStorage.hearthloungeGameInfo && JSON.parse(localStorage.hearthloungeGameInfo).wild.slice(4);

  const listExtensions = (extensions) =>{

    return (
      extensions.map((extension, index) =>
        <li key={index} className={extensionPath === _.kebabCase(extension) ? 'selected' : undefined}>
          <Link to={`/extensions/${_.kebabCase(extension)}/overview`}
                className={`${_.kebabCase(extension)} ${extensionPath === _.kebabCase(extension) ? 'active' : undefined}`}>
            <Icon name={_.kebabCase(extension)} />
            <p>{extension}</p>
          </Link>
        </li>
      )
    )
  };

  return (
    <div className="sidebar container__extension-list">
      <ul className="sidebar__body sidebar__body--extensions">
        {
          info.loading && <Loader/>
        }
        {
          ((!info.loading && info.wild) || localStorageExtensions) && listExtensions(localStorageExtensions)
        }
        {
          !info.wild || !localStorageExtensions && <div>Couldn't load extensions. Try again later.</div>
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { info } = state;
  return { info };
};

export default connect(mapStateToProps)(Sidebar);;

Sidebar.propTypes = {
  extensionType: PropTypes.string.isRequired
};
