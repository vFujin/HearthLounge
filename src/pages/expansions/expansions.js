import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
export class Expansions extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sidebar
      preSelected: 'displayBlock',
      expansionOverview: 'displayBlock',
      selected: 'displayNone',
      expansion: 'displayNone',

      //Topbar
      topbarActiveTab: '',
      topbarActiveTabUrl: '',
      sidebarActiveTab: null,
      details: 'displayNone',
      matchesPickedExpansion: 'displayNone'
    }
  }

  handleSidebarClick(event){
    let preSelected = this.state.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = this.state.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedExpansion = event.target.dataset['api'];
    let selectedExpansionUrl = event.target.dataset['url'];

    let activeTab = this.state.sidebarActiveTab === null ? selectedExpansionUrl : selectedExpansionUrl;


    this.setState({
      preSelected: preSelected,
      selected: isSelected,
      expansion: selectedExpansion,
      selectedAdventureUrl: selectedExpansionUrl,
      sidebarActiveTab: activeTab
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let activeTabUrl = event.target.dataset['url'];
    let isActive = this.state.topbarActiveTab === '' ? activeTab : activeTab;
    let isActiveUrl = this.state.topbarActiveTabUrl === '' ? activeTabUrl : activeTabUrl;
    let areDetailsShown = this.state.topbarActiveTab === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let adventureOverview = this.state.expansionOverview === "displayBlock" ? "displayNone" : "displayNone";
    let matchesExpansionPick = this.state.matchesPickedExpansion === 'displayNone' ? 'displayBlock' : 'displayBlock';

    this.setState({
      expansionOverview: adventureOverview,
      topbarActiveTab: isActive,
      topbarActiveTabUrl: isActiveUrl,
      details: areDetailsShown,
      matchesExpansionPick: matchesExpansionPick
    })
  }

  render() {
    return (
        <div className="pageContainer expansions">
          <div className="left-container">
            <Sidebar onExpansionChange={this.handleSidebarClick.bind(this)}
                     activeTopbarTab={this.state.topbarActiveTab}
                     isSelected={this.state.selected}
                     isActive={this.state.sidebarActiveTab} />
          </div>
          <div className="right-container">
            <div className={`content ${this.state.selected}`}>
              <Topbar onTabChange={this.handleTopbarClick.bind(this)}
                      isActive={this.state.topbarActiveTab}
                      sidebarActiveTab={this.state.sidebarActiveTab}
                      matchesExpansionPick={this.state.matchesPickedExpansion} />
            </div>
          </div>
        </div>
    );
  }
}
