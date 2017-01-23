import React, { Component } from 'react';
export class Topbar extends Component {
  render() {
    return (
        <div className="topbar">
          <ul>
            <li className="home-block-scheme">Home page block scheme</li>
            <li className="deck">
              <span className="hs-icon icon-deck"></span>
            </li>
            <li className="forum">
              <span className="hs-icon icon-forum"></span>
            </li>
            <li className="tournaments">
              <span className="hs-icon icon-trophy"></span>
            </li>
            <li className="streams">
              <span className="hs-icon icon-twitch"></span>
            </li>
          </ul>
        </div>
    );
  }
}