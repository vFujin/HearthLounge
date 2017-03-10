import React, { Component } from 'react';
import {TwitchClientId} from '../../../keys';
import 'whatwg-fetch';

export class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streams: []
    };

  }

  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=1', {
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


  render() {
    return (
        <div className="pageContainer streams">
          <ul className={`cards`}>
            {this.state.streams.map((stream, i)=>
                <li key={i}>
                  <iframe
                      src={`http://player.twitch.tv/?channel=${stream.channel.name}&muted=true`}
                      height="400"
                      width="600"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen="false">
                  </iframe>
                </li>
            )}
          </ul>
        </div>
    );
  }
}