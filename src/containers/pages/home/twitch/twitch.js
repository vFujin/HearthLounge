import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <li className={'home__block streams block-width-2'}>
          <Link to={'/twitch'}>
            <div className="header">Current Top HS Broadcasters</div>
          </Link>
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
        </li>
    );
  }
}

TwitchBlock.propTypes = {
  streams: React.PropTypes.array,
  streamer: React.PropTypes.string,
  activeStreamerTab: React.PropTypes.number,
  handleStreamerSelectionClick: React.PropTypes.func
};