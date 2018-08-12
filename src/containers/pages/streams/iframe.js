import React from 'react';

const Iframe = props => {
  return (
      <iframe
          src={`https://player.twitch.tv/?channel=${props.activeStreamer}&muted=true`}
          height="100%"
          width="80%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="false">
      </iframe>
  );
};

export default Iframe;