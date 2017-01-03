import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {BlackrockMountain} from './blackrock-mountain';
import {CurseOfNaxxramas} from './curse-of-naxxramas';
import {OneNightAtKarazhan} from './one-night-at-karazhan';
import {TheLeagueOfExplorers} from './the-league-of-explorers';
export class Adventures extends Component {
  constructor(props){
    super(props);
    this.state = {
      adventure: 'displayNone'
    }
  }

  handleClick(){
    let isSelected = this.state.adventure === "displayNone" ? "displayInlineFlex" : "displayNone";
    this.setState({
      adventure: isSelected
    })
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.adventure} onChange={this.handleClick.bind(this)}/>
          </div>
          <div className="right-container">
            <Topbar adventure="klatwa-naxxramas"/>
            <div className="adventure-content">
              <BlackrockMountain    display={this.state.adventure} />
              <CurseOfNaxxramas     display={this.state.adventure} />
              <OneNightAtKarazhan   display={this.state.adventure} />
              <TheLeagueOfExplorers display={this.state.adventure} />
            </div>
          </div>


        </div>
    );
  }
}
