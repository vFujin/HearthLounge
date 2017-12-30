import React from 'react';
import Loader from '../../../../../components/loaders/loader';

const TwitchIframe = props => {
  if (props.streams < 1) {
    return <Loader/>
  }
  else {
    return (
        <iframe
            title="iframe"
            src={`http://player.twitch.tv/?channel=${props.streamer}&muted=true`}
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    )
  }
};

export default TwitchIframe;
