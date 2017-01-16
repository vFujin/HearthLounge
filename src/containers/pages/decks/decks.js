import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {DecksTable} from './right-container/cards-list/decks-table';
import {ChoosenDeckView} from './choosen-deck/view/choosen-deck-view';
export class Decks extends Component {
  constructor(props){
    super(props);

    this.state = {
      //main decks view {change to true / false}
      decksSidebar: 'display-block',
      decksTopbar: 'display-flex',
      decksView: 'display-block',

      //deck view
      choosenDeckSidebar: 'display-none',
      choosenDeckTopbar: 'display-none',
      choosenDeckView: 'display-none'

    }
  }

  handleTableRowClick(){
    let isDecksSidebarActive = this.state.decksSidebar === 'display-block' ? 'display-none' : 'display-none';
    let isDecksTopbarActive = this.state.decksTopbar === 'display-flex' ? 'display-none' : 'display-none';
    let isDecksViewActive = this.state.decksView === 'display-block' ? 'display-none' : 'display-none';

    let isChoosenDeckSidebarActive = this.state.choosenDeckSidebar === 'display-none' ? 'display-block' : 'display-block';
    let isChoosenDeckTopbarActive= this.state.choosenDeckTopbar === 'display-none' ? 'display-flex' : 'display-flex';
    let isChoosenDeckViewActive = this.state.choosenDeckView === 'display-none' ? 'display-block' : 'display-block';
    this.setState({
      decksSidebar: isDecksSidebarActive,
      decksTopbar: isDecksTopbarActive,
      decksView: isDecksViewActive,

      choosenDeckSidebar: isChoosenDeckSidebarActive,
      choosenDeckTopbar: isChoosenDeckTopbarActive,
      choosenDeckView: isChoosenDeckViewActive
    })
  }

  render() {
    return (
        <div className="pageContainer decks">
          <div className="left-container">
            <Sidebar decksSidebar={this.state.decksSidebar} choosenDeckSidebar={this.state.choosenDeckSidebar}/>
          </div>
          <div className="right-container">
            <Topbar decksTopbar={this.state.decksTopbar} choosenDeckTopbar={this.state.choosenDeckTopbar}/>
            <DecksTable handleTableRowClick={this.handleTableRowClick.bind(this)} decksView={this.state.decksView}/>
            <div className={`choosen-deck-view ${this.state.choosenDeckView}`}>
              <ChoosenDeckView />
            </div>
          </div>
        </div>
    );
  }
}