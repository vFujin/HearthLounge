import React from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../../components/loaders/loader';
import Icon from "../../../components/icon";

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
                    <Icon name="login />" />
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
      <ul className="sidebar__body">
        {loadPreviews()}
      </ul>
    );
};

export default Sidebar;