import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {adventureSelected} from '../../../redux/actions/adventure/adventure';

import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {PreAdventureSelect} from './right-container/pre-adventure-select';
import {AdventureContent} from './right-container/adventure-content';
import {AdventureOverview} from './right-container/adventure-overview'

class Adventures extends Component {

  constructor(props){
    super(props);
    // this.state = {
    //   //Topbar
    //   topbarActiveTab: '',
    //   topbarActiveTabUrl: '',
    //   sidebarActiveTab: null,
    //   details: 'displayNone',
    //
    //   //Bosses
    //   activeBoss: null,
    //   activeBossUrl: null,
    //   activeBossImg: null,
    //   activeTableView: 'displayBlock',
    //   activeBossView: 'displayNone'
    // }
  }

  handleSidebarClick(event){
    let adventure = this.props.adventure;
    let preSelected = adventure.preSelected === "displayBlock" ? "displayNone" : "displayNone";
    let isSelected = adventure.selected === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.currentTarget.dataset['api'];
    let selectedAdventureUrl = event.currentTarget.dataset['url'];
    let selectedAdventureClass = event.currentTarget.dataset['adventure'];
    let activeTab = adventure.sidebarActiveTab === null ? selectedAdventureClass: selectedAdventureClass;

    let activeTableView = adventure.activeBossView === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let activeBossView = adventure.activeBossView === 'displayBlock' ? 'displayNone' : 'displayNone';

    this.props.adventureSelected(preSelected, selectedAdventure);
    this.setState({
      // preSelected: preSelected,
      // selected: isSelected,
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
    let activeBoss = event.currentTarget.dataset['boss'];
    let activeBossUrl = event.currentTarget.dataset['url'];
    let activeBossImg = event.currentTarget.dataset['img'];
    let activeTableView = this.state.activeBossView === 'displayBlock' ? 'displayNone' : 'displayNone';
    let activeBossView = this.state.activeBossView === 'displayNone' ? 'displayBlock' : 'displayBlock';
    this.setState({
      activeBoss: activeBoss,
      activeBossUrl: activeBossUrl,
      activeBossImg: activeBossImg,
      activeTableView: activeTableView,
      activeBossView: activeBossView
    });
    // dispatch(showBossDetails);
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.selected}
                     isActive={this.state.sidebarActiveTab}
                     activeTopbarTab={this.state.topbarActiveTab}
                     onAdventureChange={this.handleSidebarClick.bind(this)}/>
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

function mapStateToProps(state){
  return{
    adventure: state.adventure
  }
}

function mapDispatchToProps(dispatch){
  console.log(dispatch);
  return bindActionCreators({
    adventureSelected
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);