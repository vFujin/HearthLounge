import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Extension from "../extensions/right-container/extension";
import Icon from "../../../components/icon";
import Sidebar from "./left-container/sidebar";


class Extensions extends Component {
  componentDidMount() {
    document.title = "Extensions";
  }

  render() {
    const {windowWidth, routeObj} = this.props;
    const {extension} = routeObj.match.params;

    return (
      <div className="container__page container__page--twoSided expansions">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">
            {windowWidth <= 600 ? <Icon name="expansions"/> : "Extensions"}
          </h3>
          <Sidebar extensionPath={extension}/>
        </div>
        <Extension routeObj={routeObj}/>
      </div>
    )
  }
}

Extensions.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  routeObj: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        extension: PropTypes.string
      })
    })
  }).isRequired
};


const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};


export default connect(mapStateToProps)(Extensions);
