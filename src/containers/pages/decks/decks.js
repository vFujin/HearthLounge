import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {DecksTable} from './right-container/decks-table';
export class Decks extends Component {
  constructor(props){
    super(props);

    this.state = {
      //main decks view {change to true / false}
      sidebarFilters: 'display-block',
      topbarFilters: 'display-flex',
      deckList: 'display-block',

      //deck view
      deckSidebar: 'display-none',
      deckTopbar: 'display-none',
      deckView: 'display-none'

    }
  }

  handleTableRowClick(){
    let isSidebarFilterActive = this.state.sidebarFilters === 'display-block' ? 'display-none' : 'display-none';
    let isTopbarFilterActive = this.state.topbarFilters === 'display-flex' ? 'display-none' : 'display-none';
    let isDeckListActive = this.state.deckList === 'display-block' ? 'display-none' : 'display-none';

    let isDeckSidebarActive = this.state.deckSidebar === 'display-none' ? 'display-block' : 'display-block';
    let isDeckTopbarActive= this.state.deckTopbar === 'display-none' ? 'display-block' : 'display-block';
    let isDeckViewActive = this.state.deckView === 'display-none' ? 'display-block' : 'display-block';
    this.setState({
      sidebarFilters: isSidebarFilterActive,
      topbarFilters: isTopbarFilterActive,
      deckList: isDeckListActive,

      deckSidebar: isDeckSidebarActive,
      deckTopbar: isDeckTopbarActive,
      deckView: isDeckViewActive
    })
  }

  render() {
    return (
        <div className="pageContainer decks">
          <div className="left-container">
            <Sidebar sidebarFilters={this.state.sidebarFilters} deckSidebar={this.state.deckSidebar}/>
          </div>
          <div className="right-container">
            <Topbar topbarFilters={this.state.topbarFilters}/>
            <DecksTable handleTableRowClick={this.handleTableRowClick.bind(this)} deckList={this.state.deckList}/>
            <div className="picked-deck">
            {/*
                mana curve
                rating
                class icon
                title
                author
                mode (standard / wild)
                time when created
                type
                archetype
                crafting cost / dust cost
                patch when created?
                --------
                card list
                description
                comment section


            */}
            </div>
          </div>
        </div>
    );
  }
}