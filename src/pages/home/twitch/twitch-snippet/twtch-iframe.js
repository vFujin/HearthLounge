import React, { Component } from 'react';
export class TwitchIframe extends Component {
  render() {
    return (
      <div className="iframe-container">
        <iframe
            src="http://player.twitch.tv/?channel=trumpsc"
            width="100%"
            height="100%"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
      </div>
    );
  }
}