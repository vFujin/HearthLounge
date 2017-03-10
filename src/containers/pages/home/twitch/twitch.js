import React, { Component } from 'react';
import { Link } from 'react-router';
import {TwitchClientId} from "../../../../keys";



export class TwitchBlock extends Component {
  constructor(props){
    super(props);

    this.state = {
      streams: []
    }
  }
  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=7&muted=true', {
      headers: {
        "Accept": 'application/vnd.twitchtv.v5+json',
        "Client-Id": TwitchClientId
      }
    })
      .then(r => r.json())
      .then(data => {
        console.log(data.streams);
        this.setState({
          streams: data.streams
        })
      })
  }

  listTopStreamers(){
    return (
      this.state.streams.map(stream=>
        <div className="streamer">
          <div className="name">{stream.channel.name}</div>
          <div className="viewers">{stream.viewers}</div>
        </div>
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
              src={`http://player.twitch.tv/?channel=${this.state.streams[0].channel.name}`}
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
          <Link to={'/streamerzy'}>
            <div className="header">Aktualni Nadawcy</div>
          </Link>
          <div className="streams-body">
            <div className="live-broadcasters">
              {this.listTopStreamers()}
            </div>


            <div className="iframe-container">
              {this.showStream()}

            </div>
          </div>
        </li>
    );
  }
}