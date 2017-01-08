import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {PreAdventureSelect} from './right-container/pre-adventure-select';
import {AdventureContent} from './right-container/adventure-content';
import {AdventureOverview} from './right-container/adventure-overwiev'
export class Adventures extends Component {
  constructor(props){
    super(props);
    this.state = {
      preSelected: 'displayBlock',
      adventureOverview: 'displayBlock',
      selected: 'displayNone',
      adventure: 'displayNone',

      selectedAdventureUrl: null,

      topbarActiveTab: '',
      topbarActiveTabUrl: '',
      sidebarActiveTab: null,
      details: 'displayNone'
    }
  }

  handleSidebarClick(event){
    let preSelected = this.state.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = this.state.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['api'];
    let selectedAdventureUrl = event.target.dataset['url'];
    let selectedAdventureClass = event.target.dataset['adventure'];
    let activeTab = this.state.sidebarActiveTab === null ? selectedAdventureClass: selectedAdventureClass;

    this.setState({
      preSelected: preSelected,
      selected: isSelected,
      adventure: selectedAdventure,
      selectedAdventureUrl: selectedAdventureUrl,
      sidebarActiveTab: activeTab
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let activeTabUrl = event.target.dataset['url'];
    let isActive = this.state.topbarActiveTab === '' ? activeTab : activeTab;
    let isActiveUrl = this.state.topbarActiveTabUrl === '' ? activeTabUrl : activeTabUrl;
    let areDetailsShown = this.state.topbarActiveTab === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let adventureOverview = this.state.adventureOverview === "displayBlock" ? "displayNone" : "displayNone";

    this.setState({
      adventureOverview: adventureOverview,
      topbarActiveTab: isActive,
      topbarActiveTabUrl: isActiveUrl,
      details: areDetailsShown
    })
  }

  render() {

    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.selected} isActive={this.state.sidebarActiveTab} activeTopbarTab={this.state.topbarActiveTab} onAdventureChange={this.handleSidebarClick.bind(this)}/>
          </div>
          <div className='right-container'>
            <PreAdventureSelect preSelect={this.state.preSelected}/>
            <div className={`content ${this.state.selected}`}>
              <Topbar onDetailsChange={this.handleTopbarClick.bind(this)}
                      selectedAdventureUrl={this.state.selectedAdventureUrl}
                      isActive={this.state.topbarActiveTab}
                      sidebarActiveTab={this.state.sidebarActiveTab}/>
              <AdventureOverview adventureOverview={this.state.adventureOverview} sidebarActiveTab={this.state.sidebarActiveTab} />
              <AdventureContent sidebarActiveTab={this.state.sidebarActiveTab}
                                details={this.state.details}
                                topbarActiveTab={this.state.topbarActiveTab}
                                adventure={this.state.adventure}
                                topbarActiveTabUrl={this.state.topbarActiveTabUrl} />
            </div>
          </div>



        </div>
    );
  }
}
