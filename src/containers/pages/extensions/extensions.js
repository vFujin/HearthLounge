import React from 'react';
import { connect } from "react-redux";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import _ from "lodash";
import {extensionExists} from "../../../utils/checkIfPathExist";
import Extension from "../extensions/right-container/extension";
import Icon from "../../../components/icon";
import NotFound from "../../../components/not-found/not-found";
import SelectExtension from "../../../components/extensions/select-extension";
import Sidebar from "./left-container/sidebar";

const Extensions = ({match, location, windowWidth, extensionType = "adventures"}) => {
  document.title =  _.startCase(extensionType);
  const extension = location.pathname.split("/")[2];

  const rightContainer = () => {
    if (extension) {
      return extensionExists(extension, extensionType)
        ? <Route path={`${match.url}/:extension/:details`}
                 render={(routeObj)=> <Extension routeObj={routeObj}
                                                 extensionType={extensionType} /> }
        />
        : <NotFound page={_.startCase(extension)}
                    redirect="extensions"/>;
    } else {
      return <SelectExtension extensionType={extensionType}/>
    }
  };

  return (
    <div className="container__page container__page--twoSided expansions">
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">
          {windowWidth <= 600 ? <Icon name="expansions"/> : "Extensions"}
        </h3>
        <Sidebar extensionType={extensionType}/>
      </div>
      {rightContainer()}
    </div>
  );
};

Extensions.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  windowWidth: PropTypes.number.isRequired,
  extensionType: PropTypes.string.isRequired
};


const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Extensions);
