import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import _ from "lodash";
import Icon from "../../../components/icon";
import Loader from "../../../components/loaders/diamond/loader";
import {Link} from "react-router-dom";
import './styles/styles.css';

class SelectExtension extends Component {
  mapExtensions = (extensions) => {

    return extensions.slice(4).map((extension, i) => {
      const kebabCasedExtension = _.kebabCase(extension);

      const fixClass = () => {
        switch(kebabCasedExtension){
          case 'one-night-in-karazhan': return "karazhan";
          case "journey-to-un-goro": return "journey-to-ungoro";
          default: return kebabCasedExtension;
        }
      };

      return (
        <li key={extension}
            id={kebabCasedExtension}
            className={fixClass()}
            data-extensiontype={i < 4 ? "adventures" : "expansions"}>
          <Link to={`/extensions/${kebabCasedExtension}/overview`} className={fixClass()}>
            <Icon name={kebabCasedExtension}
                  className={kebabCasedExtension}
                  type="set"/>
            <p>{extension}</p>
          </Link>
        </li>
      )
    })
  };

  render() {
    const {info} = this.props;
    const {loading} = info;
    const storageExtensions = JSON.parse(localStorage.hearthloungeGameInfo).wild;

    return (
      <div className="container__page container__page--oneSided extensions-selection extensions">
        <h3>Select Extension</h3>
        {
          loading && !storageExtensions && <Loader />
        }
        {
          ((!loading && info.wild) && !storageExtensions) || storageExtensions && (
            <ul>
              {this.mapExtensions(info.wild || storageExtensions)}
            </ul>
          )
        }
        {
          !loading && !info.wild && !storageExtensions && <div>Could't load extensions. Try again later.</div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { info } = state;
  return { info };
};

export default connect(mapStateToProps)(SelectExtension);

SelectExtension.propTypes = {
  extensionType: PropTypes.string.isRequired
};
