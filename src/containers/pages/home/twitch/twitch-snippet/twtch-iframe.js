import React from 'react';
const TwitchIframe = props => {
  if (props.streams < 1) {
    return <p>Loading...</p>
  }
  else {
    return (
        <iframe
            src={`http://player.twitch.tv/?channel=${props.streamer}&muted=true`}
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    )
  }
};

export default TwitchIframe;
