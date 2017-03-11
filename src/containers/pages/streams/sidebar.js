import React from 'react';
import {Link} from 'react-router';

const Sidebar = props => {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Streamers</h3>
          <ul>
            {props.streams.map(stream =>
              <li>
                <Link to="{stream_name}">
                  {stream.channel.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
    );
};

export default Sidebar;