import React, { Component } from 'react';
import { Link } from 'react-router';
import {TwitchClientId} from "../../../../keys";
import TopLiveStreamersList from './twitch-snippet/top-live-streamers-list';

export class TwitchBlock extends Component {
  constructor(props){
    super(props);

    this.state = {
      streams: [],
      streamer: null,
      activeStreamerTab: null
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
        console.log(data.streams);
        this.setState({
          streams: data.streams,
          streamer: data.streams[0].channel.name
        })
      })
  }

  handleStreamerSelectionClick(e, index){
    // e.preventDefault();
    console.log(e, index);
    let channelName = e.currentTarget.id;

    console.log(channelName);
    this.setState({
      streamer: channelName,
      activeStreamerTab: index
    })
  }

  showStream(){
    if(this.state.streams < 1){
      return <p>Loading...</p>
    }
    else{
      return (
          <iframe
              src={`http://player.twitch.tv/?channel=${this.state.streamer}&muted=true`}
              width="100%"
              height="100%"
              scrolling="no">
          </iframe>
      )
    }
  }



  render() {
    return (
        <li className={'home__block streams block-width-2'}>
          <Link to={'/twitch'}>
            <div className="header">Current Top HS Broadcasters</div>
          </Link>
          <div className="streams-body">
            <TopLiveStreamersList streams={this.state.streams}
                                  handleStreamerSelectionClick={this.handleStreamerSelectionClick}
                                  activeStreamerTab={this.state.activeStreamerTab}/>


            <div className="iframe-container">
              {this.showStream()}

            </div>
          </div>
        </li>
    );
  }
}

TwitchBlock.propTypes = {
  streams: React.PropTypes.array,
  streamer: React.PropTypes.string
};