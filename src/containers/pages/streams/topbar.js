import React from 'react';
import Loader from '../../shared-assets/loader';

const Topbar = props => {

  const loadInfo = () =>{
    if(props.streams < 1){
      return <Loader/>
    }
    else{
      return (
          <div>
            <p>Currently watching: {props.streams[0].channel.name} | {props.streams[0].channel.status}</p>
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