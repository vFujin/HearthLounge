import React from 'react';
import _ from "lodash";
import {Link} from 'react-router-dom';
import Icon from "../../../../components/icon";
import {connect} from "react-redux";
import Loader from "../../../../components/loaders/diamond/loader";
import setToIconFormat from "../../../../utils/set-to-icon-format";

const Sidebar = ({extensionPath, info}) => {
  const localStorageExtensions = localStorage.hearthloungeGameInfo && JSON.parse(localStorage.hearthloungeGameInfo).wild.slice(4);

  const listExtensions = (extensions) =>{

    return (
      extensions.map((extension, index) =>
        <li key={index} className={extensionPath === setToIconFormat(extension) ? 'selected' : undefined}>
          <Link to={`/extensions/${setToIconFormat(extension)}/overview`}
                className={`${setToIconFormat(extension)} ${extensionPath === setToIconFormat(extension) ? 'active' : undefined}`}>
            <Icon name={setToIconFormat(extension)} />
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
          (!info.wild || !localStorageExtensions) && <div>Couldn't load extensions. Try again later.</div>
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { info } = state;
  return { info };
};

export default connect(mapStateToProps)(Sidebar);
