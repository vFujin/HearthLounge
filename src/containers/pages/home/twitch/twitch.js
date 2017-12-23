import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TwitchClientId} from "../../../../keys";
import TopLiveStreamersList from './twitch-snippet/top-livestreamers-list';
import TwitchIframe from './twitch-snippet/twtch-iframe';

export class TwitchBlock extends Component {
  constructor(props){
    super(props);

    this.state = {
      streams: [],
      streamer: null,
      activeStreamerTab: "0"
    }
  }

  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=6', {
      headers: {
        "Accept": 'application/vnd.twitchtv.v5+json',
        "Client-Id": TwitchClientId
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          streams: data.streams,
          streamer: data.streams[0].channel.name
        })
      })
  }

  componentWillUnmount(){
    this.setState({
      streams: [],
      streamer: null,
      activeStreamerTab: "0"
    })
  }

  handleStreamerSelectionClick(e, index){
    let channelName = e.currentTarget.id;
    this.setState({
      streamer: channelName,
      activeStreamerTab: index
    })
  }

  render() {
    return (
        <div>
          <div className="streams-body">
            <div className="live-broadcasters">
              <TopLiveStreamersList streams={this.state.streams}
                                    handleStreamerSelectionClick={(e, index)=>this.handleStreamerSelectionClick(e, index)}
                                    activeStreamerTab={this.state.activeStreamerTab}/>
            </div>
            <div className="iframe-container">
              <TwitchIframe streams={this.state.streams} streamer={this.state.streamer}/>
            </div>
          </div>
        </div>
    );
  }
}

TwitchBlock.propTypes = {
  streams: PropTypes.array,
  streamer: PropTypes.string,
  activeStreamerTab: PropTypes.number,
  handleStreamerSelectionClick: PropTypes.func
};