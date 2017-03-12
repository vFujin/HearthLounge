import React from 'react';
import {Link} from 'react-router';

const NotFound = props => {
  return (
      <div className={`not-found`}>
        <div className="wrapper">
          <div className="lost">
            <span className="hs-icon icon-mana-4"></span>
            <span className="hs-icon icon-hs_logo"></span>
            <span className="hs-icon icon-mana-4"></span>
          </div>
          <div className="description">
            <p>Sorry, the <span>{props.page}</span> page you are looking for doesn't exist.</p>
            <p>Take a run around the block or tap the button below.</p>
            <button className="btn-pearl">
              <Link to={`/${props.page_url}`}>Go to the {props.page} page</Link>
            </button>
          </div>
        </div>
      </div>
  );
};

export default NotFound;