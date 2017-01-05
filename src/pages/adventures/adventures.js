import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {AdventureDetails} from './adventure_details';
export class Adventures extends Component {
  constructor(props){
    super(props);
    this.state = {
      adventure: 'displayNone',
      selected_adventure: 'displayNone',
      selected_adventure_url: null,

      isTopbarTabActive: 'not-active'
    }
  }

  handleClick(event){
    let isSelected = this.state.adventure === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['adventure'];
    let selectedAdventureUrl = event.target.dataset['url'];
    console.log(selectedAdventure)
    this.setState({
      adventure: isSelected,
      selected_adventure: selectedAdventure,
      selected_adventure_url: selectedAdventureUrl
    })
  }

  handleTopbarClick(event){
    let isActive = this.state.isTopbarTabActive === 'not-active' ? 'active' : 'not-active';
    let selectedAdventureUrl = event.target.dataset['url'];

    this.setState({
      selected_adventure_url: selectedAdventureUrl,
      isTopbarTabActive: isActive
    })
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.adventure} onAdventureChange={this.handleClick.bind(this)}/>
          </div>
          <div className={`right-container ${this.state.selected_adventure}`}>
            <Topbar onDetailsChange={this.handleTopbarClick.bind(this)} selectedAdventureUrl={this.state.selected_adventure_url} isActive={this.state.isTopbarTabActive} />
            <div className={`adventure-content ${this.state.selected_adventure_url}`}>
              <AdventureDetails selectedAdventure={this.state.selected_adventure} />
            </div>
          </div>


        </div>
    );
  }
}
