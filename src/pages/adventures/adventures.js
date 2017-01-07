import React, { Component } from 'react';
// import unirest from 'unirest';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {PreAdventureSelect} from './right-container/pre-adventure-select';
import {AdventureContent} from './right-container/adventure-content';
export class Adventures extends Component {
  constructor(props){
    super(props);
    this.state = {
      preSelected: 'displayBlock',
      selected: 'displayNone',
      adventure: 'displayNone',
      details: 'displayNone',
      selected_adventure_url: null,

      topbarActiveTab: '',
      sidebarActiveTab: null,

      cards: []
    }
  }

  handleSidebarClick(event){
    let preSelected = this.state.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = this.state.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['api'];
    let selectedAdventureUrl = event.target.dataset['url'];
    let selectedAdventureClass = event.target.dataset['adventure'];
    let activeTab = this.state.sidebarActiveTab === null ?  selectedAdventureClass: selectedAdventureClass;

    this.setState({
      preSelected: preSelected,
      selected: isSelected,
      adventure: selectedAdventure,
      selected_adventure_url: selectedAdventureUrl,
      sidebarActiveTab: activeTab
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let isActive = this.state.topbarActiveTab === '' ? activeTab : activeTab;
    let areDetailsActive = this.state.topbarActiveTab === 'displayNull' ? 'displayBlock' : 'displayBlock';
    console.log(activeTab);
    this.setState({
      selected_adventure_url: this.state.selected_adventure_url,
      topbarActiveTab: isActive,
      details: areDetailsActive
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
              <Topbar onDetailsChange={this.handleTopbarClick.bind(this)} selectedAdventureUrl={this.state.selected_adventure_url} isActive={this.state.topbarActiveTab} />
              <AdventureContent sidebarActiveTab={this.state.sidebarActiveTab} details={this.state.details} topbarActiveTab={this.state.topbarActiveTab} adventure={this.state.adventure} />
            </div>
          </div>



        </div>
    );
  }
}
