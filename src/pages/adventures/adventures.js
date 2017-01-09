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
      //Sidebar
      preSelected: 'displayBlock',
      adventureOverview: 'displayBlock',
      selected: 'displayNone',
      adventure: 'displayNone',
      selectedAdventureUrl: null,

      //Topbar
      topbarActiveTab: '',
      topbarActiveTabUrl: '',
      sidebarActiveTab: null,
      details: 'displayNone',

      //Bosses
      activeBoss: null,
      activeBossUrl: null,
      activeBossImg: null,
      activeTableView: 'displayBlock',
      activeBossView: 'displayNone'
    }
  }

  handleSidebarClick(event){
    let preSelected = this.state.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = this.state.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['api'];
    let selectedAdventureUrl = event.target.dataset['url'];
    let selectedAdventureClass = event.target.dataset['adventure'];
    let activeTab = this.state.sidebarActiveTab === null ? selectedAdventureClass: selectedAdventureClass;

    let activeTableView = this.state.activeBossView === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let activeBossView = this.state.activeBossView === 'displayBlock' ? 'displayNone' : 'displayNone';

    this.setState({
      preSelected: preSelected,
      selected: isSelected,
      adventure: selectedAdventure,
      selectedAdventureUrl: selectedAdventureUrl,
      sidebarActiveTab: activeTab,

      //Bosses view after choosing adventure
      activeTableView: activeTableView,
      activeBossView: activeBossView
    })
  }

  handleTopbarClick(event){
    let activeTab = event.target.dataset['tab'];
    let activeTabUrl = event.target.dataset['url'];
    let isActive = this.state.topbarActiveTab === '' ? activeTab : activeTab;
    let isActiveUrl = this.state.topbarActiveTabUrl === '' ? activeTabUrl : activeTabUrl;
    let areDetailsShown = this.state.topbarActiveTab === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let adventureOverview = this.state.adventureOverview === "displayBlock" ? "displayNone" : "displayNone";

    let activeTableView = this.state.activeBossView === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let activeBossView = this.state.activeBossView === 'displayBlock' ? 'displayNone' : 'displayNone';
    this.setState({
      adventureOverview: adventureOverview,
      topbarActiveTab: isActive,
      topbarActiveTabUrl: isActiveUrl,
      details: areDetailsShown,

      //Bosses view after choosing adventure
      activeTableView: activeTableView,
      activeBossView: activeBossView
    })
  }

  handleBossClick(event){
    let activeBoss = event.target.dataset['boss'];
    let activeBossUrl = event.target.dataset['url'];
    let activeBossImg = event.target.dataset['img'];
    let activeTableView = this.state.activeBossView === 'displayBlock' ? 'displayNone' : 'displayNone';
    let activeBossView = this.state.activeBossView === 'displayNone' ? 'displayBlock' : 'displayBlock';
    this.setState({
      activeBoss: activeBoss,
      activeBossUrl: activeBossUrl,
      activeBossImg: activeBossImg,
      activeTableView: activeTableView,
      activeBossView: activeBossView
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
                                adventure={this.state.adventure}
                                details={this.state.details}
                                topbarActiveTabUrl={this.state.topbarActiveTabUrl}
                                selectedTopbarTab={this.state.topbarActiveTab}
                                selectedAdventureUrl={this.state.selectedAdventureUrl}
                                handleBossClick={this.handleBossClick.bind(this)}
                                activeTableView={this.state.activeTableView}
                                activeBoss={this.state.activeBoss}
                                activeBossUrl={this.state.activeBossUrl}
                                activeBossImg={this.state.activeBossImg}
                                activeBossView={this.state.activeBossView}/>
            </div>
          </div>



        </div>
    );
  }
}
