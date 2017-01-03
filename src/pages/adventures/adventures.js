import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {BlackrockMountain} from './blackrock-mountain';
import {CurseOfNaxxramas} from './curse-of-naxxramas';
import {OneNightAtKarazhan} from './one-night-at-karazhan';
import {TheLeagueOfExplorers} from './the-league-of-explorers';
export class Adventures extends Component {
  constructor(props) {
    super(props);

    this.state = {active: false};
  }
  handleClick(i) {
    let isActive = this.state.active === true ? false: true;
    this.setState({active: isActive});
  }
  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar adventure="klatwa-naxxramas"/>
            <div className="adventure-content">
              <BlackrockMountain    active={false}/>
              <CurseOfNaxxramas     active={false}/>
              <OneNightAtKarazhan   active={false}/>
              <TheLeagueOfExplorers active={false}/>
            </div>
          </div>


        </div>
    );
  }
}
