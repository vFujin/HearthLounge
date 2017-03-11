import React from 'react';
import {Link} from 'react-router';

const Sidebar = props => {

    return (
        <div className="sidebar">
          <h3 className="filter-header">Streamers</h3>
          <ul>
            {props.streams.map(stream =>
              <li key={stream['_id']}>
                <Link to="{stream_name}" >



                    <img src={stream.preview.large} alt={`${stream.channel.display_name}'s preview`}/>
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
};

export default Sidebar;