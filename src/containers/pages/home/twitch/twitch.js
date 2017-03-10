import React, { Component } from 'react';
import { Link } from 'react-router';
import {TwitchClientId} from "../../../../keys";

export class TwitchBlock extends Component {
  constructor(props){
    super(props);

    this.state = {
      streams: [],
      streamer: null
    }
  }

  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=7', {
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

  handleStreamerSelectionClick(e){
    // e.preventDefault();
    let channelName = e.currentTarget.id;
    console.log(channelName);
    this.setState({
      streamer: channelName
    })
  }

  listTopStreamers(){
    return (
      this.state.streams.map(stream=>
        <li key={stream["_id"]}
            onClick={this.handleStreamerSelectionClick.bind(this)}
            className="streamer"
            id={stream.channel.name}>
          <a href="">
            <div className="name">{stream.channel.name}</div>
            <div className="viewers">{stream.viewers}</div>
          </a>
        </li>
      )
    )
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
            <ul className="live-broadcasters">
              {this.listTopStreamers()}
            </ul>


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