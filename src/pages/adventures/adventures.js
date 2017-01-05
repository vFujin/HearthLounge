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
      selected_adventure_url: ''
    }
  }

  handleClick(event){
    let isSelected = this.state.adventure === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['adventure'];
    let selectedAdventureUrl = event.target.dataset['url'];
    this.setState({
      adventure: isSelected,
      selected_adventure: selectedAdventure,
      selected_adventure_url: selectedAdventureUrl
    })
  }

  handleTopClick(event){
    let selectedAdventureUrl = event.target.dataset['url'];
    this.setState({
      selected_adventure_url: selectedAdventureUrl
    })
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.adventure} onAdventureChange={this.handleClick.bind(this)}/>
          </div>
          <div className="right-container">
            <Topbar onDetailsChange={this.handleClick.bind(this)} selectedAdventureUrl={this.state.selected_adventure_url}/>
            <div className={`adventure-content ${this.state.selected_adventure_url}`}>
              <AdventureDetails adventure={this.state.selected_adventure} />
            </div>
          </div>


        </div>
    );
  }
}
