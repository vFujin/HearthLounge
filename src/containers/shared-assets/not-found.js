import React, { Component } from 'react';
import {Link} from 'react-router';

export class NotFound extends Component {
  render() {
    return (
        <div className={`pageContainer not-found`}>
          <div className="wrapper">
            <div className="lost">
              <span className="hs-icon icon-mana-4"></span>
              <span className="hs-icon icon-hs_logo"></span>
              <span className="hs-icon icon-mana-4"></span>
            </div>
            <div className="description">
              <p>Sorry, the page you are looking for doesn't exist.</p>
              <p>Take a run around the block or tap the button below.</p>
              <button className="btn-pearl">
                <Link to="/">Go to the home page</Link>
              </button>
            </div>
          </div>
        </div>
    );
  }
}