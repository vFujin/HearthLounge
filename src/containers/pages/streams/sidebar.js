import React from 'react';
import {Link} from 'react-router';
import Loader from '../../shared-assets/loader';

const Sidebar = props => {

  const loadPreviews = () =>{
    if(props.streams < 1){
      return <Loader/>;
    }
    else{
      return (
        props.streams.map(stream =>
          <li onClick={props.handlePreviewClick}
              className="preview"
              id={stream.channel.name}
              key={stream['_id']}>
            <Link to={`/twitch/${stream.channel.name}`} >
              <div className="preview-info">
                <div className="preview-topbar">
                  <div className="preview-name">{stream.channel.display_name}</div>
                  <div className="preview-viewers">
                    <span className="hs-icon icon-login"></span>
                    <p>{stream.viewers}</p>
                  </div>
                </div>
                <div className="preview-bottombar">
                  <div className="preview-status">
                    <p>{stream.channel.status}</p>
                  </div>
                </div>
              </div>
              <img src={stream.preview.large} alt={`${stream.channel.display_name}'s preview`}/>
            </Link>
          </li>
        )
      )
    }
  };

    return (
        <div className="sidebar">
          <h3 className="filter-header">Streamers</h3>
          <ul>
            {loadPreviews()}
          </ul>
        </div>
    );
};

export default Sidebar;