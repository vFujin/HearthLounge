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

      topbarActiveTab: null,
      sidebarActiveTab: null
    }
  }

  handleSidebarClick(event){
    let isSelected = this.state.adventure === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['api'];
    let selectedAdventureUrl = event.target.dataset['url'];
    let selectedAdventureClass = event.target.dataset['adventure'];
    let activeTab = this.state.sidebarActiveTab === null ?  selectedAdventureClass: selectedAdventureClass;

    this.setState({
      adventure: isSelected,
      selected_adventure: selectedAdventure,
      selected_adventure_url: selectedAdventureUrl,
      sidebarActiveTab: activeTab
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let isActive = this.state.topbarActiveTab === null ? activeTab : activeTab;
    console.log(activeTab);
    this.setState({
      selected_adventure_url: this.state.selected_adventure_url,
      topbarActiveTab: isActive
    })
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.adventure} isActive={this.state.sidebarActiveTab} onAdventureChange={this.handleSidebarClick.bind(this)}/>
          </div>
          <div className={`right-container ${this.state.selected_adventure}`}>
            <Topbar onDetailsChange={this.handleTopbarClick.bind(this)} selectedAdventureUrl={this.state.selected_adventure_url} isActive={this.state.topbarActiveTab} />
            <div className={`adventure-content ${this.state.selected_adventure_url}`}>
              <AdventureDetails selectedAdventure={this.state.selected_adventure} />
            </div>
          </div>


        </div>
    );
  }
}
