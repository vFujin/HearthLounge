import React, { Component } from 'react';
import { Link } from 'react-router';
import { TwitchIframe } from './twitch-snippet/twtch-iframe';
import { TwitchLiveBroadcasters } from './twitch-snippet/twitch-live-broadcasters';
export class TwitchBlock extends Component {
  render() {
    return (
        <li className={'home__block streams block-width-2'}>
          <Link to={'/streamerzy'}>
            <div className="header">Aktualni Nadawcy</div>
          </Link>
          <div className="streams-body">
            <div className="live-broadcasters">
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
              <TwitchLiveBroadcasters/>
            </div>
            {/*<TwitchIframe/>*/}
          </div>
        </li>
    );
  }
}