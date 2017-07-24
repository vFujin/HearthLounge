import React from 'react';
import Loader from '../../../components/loader';

const Topbar = props => {
  // let path = props.params.channel;
  let status = props.streams.filter(x=>x.channel.name===props.activeStreamer).map(x=>x.channel.status);

  const loadInfo = () =>{
    if(props.streams < 1){
      return <Loader/>
    }
    else{
      return (
          <div>
            <p>Currently watching: {props.activeStreamer} | {status}</p>
          </div>
      )
    }
  };

  return (
      <div className="topbar">
        {loadInfo()}
      </div>

  )
};

export default Topbar;