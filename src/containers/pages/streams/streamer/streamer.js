import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStreamerRequest, resetActiveStreamer} from "../../../../redux/streams/streamer/actions";
import Loader from "../../../../components/loaders/diamond/loader";
import {withRouter} from "react-router-dom";

class Streamer extends Component {
  componentDidMount(){
    const {match, activeStreamer, fetchStreamerRequest} = this.props;
    const {streamer} = match.params;


    if(activeStreamer !== ""){
      fetchStreamerRequest(streamer)
    }
  }

  componentWillUnmount(){
    this.props.resetActiveStreamer();
  }

  render() {
    const {loading, activeStreamer, error} = this.props;
    return (
      <div className="streamer">
        {
          loading && <Loader />
        }
        {
          !loading && activeStreamer && (
            <div className="streamer__channel">
              <iframe className="streamer__channel--video" src={`http://player.twitch.tv/?channel=${activeStreamer}&muted=true`} frameBorder="0"/>
              <iframe className="streamer__channel--chat" src={`http://www.twitch.tv/embed/${activeStreamer}/chat?darkpopout`} frameBorder="0"/>
            </div>

          )
        }
        {
          !loading && error && (
            <div>Couldn't load streamer. Try again later</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading, activeStreamer, error } = state.streams;
  return { loading, activeStreamer, error };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStreamerRequest: payload => dispatch(fetchStreamerRequest(payload)),
    resetActiveStreamer: () => dispatch(resetActiveStreamer())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Streamer));
