import React, { Component } from 'react';
import {TwitchClientId} from '../../../keys';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Loader from '../../shared-assets/loader';
import 'whatwg-fetch';

export class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streams: []
    };

  }

  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=10', {
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

  componentWillUnmount(){
    this.setState({
      streams: []
    })
  }

  loadIframe(){
    if(this.state.streams < 1){
      return <Loader/>;
    }
    else{
      return (
        <iframe
            src={`http://player.twitch.tv/?channel=${this.state.streams[0].channel.name}&muted=true`}
            height="100%"
            width="80%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="false">
        </iframe>
      )
    }
  }


  render() {
    return (
        <div className="pageContainer streams">
          <div className="left-container">
            <Sidebar streams={this.state.streams} />
          </div>
          <div className="right-container">
            <Topbar streams={this.state.streams}/>
            <div className="stream">
              {this.loadIframe()}
            </div>
          </div>
        </div>
    );
  }
}