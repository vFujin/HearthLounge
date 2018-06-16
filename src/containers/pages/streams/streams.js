import React, { Component } from 'react';
import { connect } from "react-redux";
import Sidebar from './streamers/sidebar';
import Topbar from './streamers/topbar';
import Loader from '../../../components/loaders/diamond/loader';
import Streamer from './streamer/streamer';
import {fetchStreamersRequest} from "../../../redux/streams/actions";
import {fetchStreamerSuccess} from "../../../redux/streams/streamer/actions";
import './styles.css';

class Streams extends Component {
  componentDidMount() {
    this.props.fetchStreamersRequest();
  }

  handlePreviewClick = (e) => {
    let streamer = e.currentTarget.id;
    this.props.fetchStreamerSuccess(streamer);
  };

  render() {
    const {loading, all, error, activeStreamer} = this.props.streams;

    return (
        <div className="container__page container__page--twoSided streams">
          <div className="container__page--inner  container__page--left">
            <h3 className="sidebar__header">Streamers</h3>
            <Sidebar streams={all} handlePreviewClick={this.handlePreviewClick}/>
          </div>

          <div className="container__page--inner container__page--right">
            <Topbar streams={all} activeStreamer={activeStreamer} />
            <div className="content">
              {
                loading && <Loader/>
              }
              {
                !loading && all.length > 0 && <Streamer />
              }
              {
                !loading && all.length === 0 && !error && (
                  <div>There are no streams currently.</div>
                )
              }
              {
                !loading && error && (
                  <div>Couldn't load streams. Try again later.</div>
                )
              }
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const { streams } = state;
  return { streams };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStreamersRequest: () => dispatch(fetchStreamersRequest()),
    fetchStreamerSuccess: payload => dispatch(fetchStreamerSuccess(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Streams);
