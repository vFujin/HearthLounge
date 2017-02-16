import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {PreExpansionSelect} from './right-container/pre-expansion-select';
import {ExpansionContent} from './right-container/expansion-content';
import {ExpansionOverview} from './right-container/expansion-overview';

import {connect} from 'react-redux';
import {bindActionCreators, dispatch} from 'redux';
import {selectExpansion} from '../../../redux/actions/expansions';

class Expansions extends Component {

  constructor(props){
    super(props);
  }

  handleSidebarClick(event){
    // let arr = {
    //   preSelected: this.props.expansion.preSelected === "displayBlock" ? "displayNone" : "displayNone",
    //   isSelected: this.props.expansion.selected === "displayNone" ? "displayBlock" : "displayBlock",
    //   selectedExpansion: event.target.dataset['api'],
    //   selectedExpansionUrl: event.target.dataset['url'],
    //   selectedExpansionClass: event.target.dataset['expansion'],
    //
    //   activeTab: this.props.expansion.sidebarActiveTab === '' ? this.selectedExpansionUrl : this.selectedExpansionUrl
    // };
    // this.setState({
    //   preSelected: preSelected,
    //   selected: isSelected,
    //   expansion: selectedExpansion,
    //   selectedAdventureUrl: selectedExpansionUrl,
    //   sidebarActiveTab: activeTab,
    //   selectedExpansionClass: selectedExpansionClass
    // })
  }

  handleTopbarClick(event){
    let expansion = this.props.expansion;
    let activeTab = event.target.dataset['tab'];
    let activeTabUrl = event.target.dataset['url'];
    let isActive = expansion.topbarActiveTab === '' ? activeTab : activeTab;
    let isActiveUrl = expansion.topbarActiveTabUrl === '' ? activeTabUrl : activeTabUrl;
    let areDetailsShown = expansion.topbarActiveTab === 'displayNone' ? 'displayBlock' : 'displayBlock';
    let expansionOverview = expansion.expansionOverview === "displayBlock" ? "displayNone" : "displayNone";

    this.setState({
      expansionOverview: expansionOverview,
      topbarActiveTab: isActive,
      topbarActiveTabUrl: isActiveUrl,
      details: areDetailsShown
    })
  }

  render() {
    let expansion = this.props.expansion;
    return (
        <div className="pageContainer expansions">
          <div className="left-container">
            <Sidebar onExpansionChange={this.handleSidebarClick.bind(this)}
                     activeTopbarTab={expansion.topbarActiveTab}
                     isSelected={expansion.selected}
                     isActive={expansion.sidebarActiveTab} />
          </div>
          <div className="right-container">
            <PreExpansionSelect preSelect={expansion.preSelected} />
            <div className={`content ${expansion.selected}`}>
              <Topbar onTabChange={this.handleTopbarClick.bind(this)}
                      isActive={expansion.topbarActiveTab}
                      sidebarActiveTab={expansion.sidebarActiveTab}
                      selectedExpansionClass={expansion.selectedExpansionClass}/>

              <ExpansionOverview expansionOverview={expansion.expansionOverview}
                                 sidebarActiveTab={expansion.sidebarActiveTab}
                                 selectedExpansionClass={expansion.selectedExpansionClass}/>

              <ExpansionContent expansion={expansion.expansion}
                                topbarActiveTabUrl={expansion.topbarActiveTabUrl}
                                topbarActiveTab={expansion.topbarActiveTab}
                                selectedExpansionClass={expansion.selectedExpansionClass}
                                content={expansion.details}/>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("Expansion state: ", state.expansion);
  return {
    expansion: state.expansion
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectExpansion
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Expansions);