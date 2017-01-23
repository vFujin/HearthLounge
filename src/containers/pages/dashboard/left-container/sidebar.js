import React, { Component } from 'react';


export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Profile</h3>
          <ul>
            <li className="avatar"><img src="http://lorempixel.com/200/200/cats/" alt="cat"/></li>
            <li className="username">xx_Joe_xx</li>
            <li className="email">joe@gmail.com</li>
            <li className="firstname">Joe</li>
            <li className="lastname">Smith</li>
            <li className="gender">Male</li>
            <li className="country">'Murica</li>
            <li className="signature">random text</li>
            <li className="battletag">placeholder#0000</li>
            <li className="favourite-class">Warlock</li>
            <li className="region">EU</li>
            <li className="facebook">www.facebook.com/placeholder</li>
            <li className="twitter">www.twitter.com/placeholder</li>
            <li className="twitch">www.twitch.com/placeholder</li>
            <li className="youtube">www.youtube.com/placeholder</li>
          </ul>
          <button>Edit</button>
        </div>
    );
  }
}