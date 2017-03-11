import React from 'react';
import {Link} from 'react-router';

const Sidebar = props => {

    return (
        <div className="sidebar">
          <h3 className="filter-header">Streamers</h3>
          <ul>
            {props.streams.map(stream =>
              <li className="preview" key={stream['_id']}>
                <Link to="{stream_name}" >
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
            )}
          </ul>
        </div>
    );
};

export default Sidebar;