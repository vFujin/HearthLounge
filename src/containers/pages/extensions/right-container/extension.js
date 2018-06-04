import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Topbar from './topbar';
import Content from './content';
import {extension_details} from "../../../../globals/extension-details";

class Extension extends PureComponent{
  render() {
    const {extensionType, routeObj} = this.props;
    const {match, location} = routeObj;
    const {details, extension} = match.params;
    const detailsChild = location.pathname.split("/")[4];
    const extensionObj = extension_details[extensionType].find(ext => ext.url === extension);

    return (
      <div className="container__page--inner container__page--right">
        <Topbar extension={extensionObj}
                details={details}/>
        <Content details={details}
                 detailsChild={detailsChild}
                 extension={extensionObj}
                 extensionType={extensionType}/>
      </div>
    )
  }
}

export default Extension;

Extension.propTypes = {
  extensionType: PropTypes.string.isRequired,
  routeObj: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        details: PropTypes.string,
        extension: PropTypes.string,
      })
    }),
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  }).isRequired
};
