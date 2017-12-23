import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../../../components/loaders/loader'
const TopLiveStreamersList = props => {

  const list = () =>{
    return (
      props.streams.map((stream, index) =>
        <li key={stream["_id"]}
            onClick={(e) => props.handleStreamerSelectionClick(e, index)}
            className="streamer"
            id={stream.channel.name}>
          <Link to="" className={props.activeStreamerTab === index ? "active" : ""}>
            <div className="name">{stream.channel.name}</div>
            <div className="viewers">{stream.viewers}</div>
          </Link>
        </li>
      )
    )
  };

  if (props.streams < 1) {
    return <Loader/>
  }
  else {
    return (
        <ul>
          {list()}
        </ul>
    )
  }
};

export default TopLiveStreamersList;