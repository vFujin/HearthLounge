import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {BlackrockMountain} from './blackrock-mountain';
import {CurseOfNaxxramas} from './curse-of-naxxramas';
import {OneNightAtKarazhan} from './one-night-at-karazhan';
import {TheLeagueOfExplorers} from './the-league-of-explorers';
export class Adventures extends Component {
  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar adventure="klatwa-naxxramas"/>
            <BlackrockMountain/>
            <CurseOfNaxxramas/>
            <OneNightAtKarazhan/>
            <TheLeagueOfExplorers/>
          </div>


        </div>
    );
  }
}
