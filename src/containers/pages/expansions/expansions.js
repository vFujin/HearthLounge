import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {PreExpansionSelect} from './right-container/pre-expansion-select';
import {ExpansionContent} from './right-container/expansion-content';
import {ExpansionOverview} from './right-container/expansion-overview';
export class Expansions extends Component {
  constructor(props){
    super(props);

    this.state = {
      //Sidebar
      preSelected: 'displayBlock',
      expansionOverview: 'displayBlock',
      selected: 'displayNone',
      expansion: 'displayBlock',
      selectedExpansionClass: null,

      //Topbar
      topbarActiveTab: '',
      topbarActiveTabUrl: '',
      sidebarActiveTab: null,
      details: 'displayNone'
    }
  }

  handleSidebarClick(event){
    let preSelected = this.state.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = this.state.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedExpansion = event.target.dataset['api'];
    let selectedExpansionUrl = event.target.dataset['url'];
    let selectedExpansionClass= event.target.dataset['expansion'];

    let activeTab = this.state.sidebarActiveTab === null ? selectedExpansionUrl : selectedExpansionUrl;
    // let activeTopbarTab = this.state.topbarActiveTabUrl ===

    this.setState({
      preSelected: preSelected,
      selected: isSelected,
      expansion: selectedExpansion,
      selectedAdventureUrl: selectedExpansionUrl,
      sidebarActiveTab: activeTab,
      selectedExpansionClass: selectedExpansionClass
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let activeTabUrl = event.target.dataset['url'];
    let isActive = this.state.topbarActiveTab === '' ? activeTab : activeTab;
    let isActiveUrl = this.state.topbarActiveTabUrl === '' ? activeTabUrl : activeTabUrl;
    let areDetailsShown = this.state.topbarActiveTab === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let expansionOverview = this.state.expansionOverview === "displayBlock" ? "displayNone" : "displayNone";

    this.setState({
      expansionOverview: expansionOverview,
      topbarActiveTab: isActive,
      topbarActiveTabUrl: isActiveUrl,
      details: areDetailsShown
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
            <PreExpansionSelect preSelect={this.state.preSelected} />
            <div className={`content ${this.state.selected}`}>
              <Topbar onTabChange={this.handleTopbarClick.bind(this)}
                      isActive={this.state.topbarActiveTab}
                      sidebarActiveTab={this.state.sidebarActiveTab}
                      selectedExpansionClass={this.state.selectedExpansionClass}/>
              <ExpansionOverview expansionOverview={this.state.expansionOverview} sidebarActiveTab={this.state.sidebarActiveTab} selectedExpansionClass={this.state.selectedExpansionClass}/>
              <ExpansionContent expansion={this.state.expansion}
                                topbarActiveTabUrl={this.state.topbarActiveTabUrl}
                                topbarActiveTab={this.state.topbarActiveTab}
                                selectedExpansionClass={this.state.selectedExpansionClass}
                                content={this.state.details}/>
            </div>
          </div>
        </div>
    );
  }
}
