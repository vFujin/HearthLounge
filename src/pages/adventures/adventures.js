import React, { Component } from 'react';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {AdventureDetails} from './adventure_details';
export class Adventures extends Component {
  constructor(props){
    super(props);
    this.state = {
      adventure: 'displayNone',
      selected_adventure: 'displayNone'
    }
  }

  handleClick(event){
    let isSelected = this.state.adventure === "displayNone" ? "displayBlock" : "displayBlock";
    let selectedAdventure = event.target.dataset['adventure'];
    console.log(selectedAdventure);
    this.setState({
      adventure: isSelected,
      selected_adventure: selectedAdventure
    })
  }

  render() {
    return (
        <div className="pageContainer adventures">
          <div className="left-container">
            <Sidebar isSelected={this.state.adventure} onChange={this.handleClick.bind(this)}/>
          </div>
          <div className="right-container">
            <Topbar adventure={this.state.selected_adventure}/>
            <div className={`adventure-content ${this.state.selected_adventure}`}>
              <AdventureDetails display={this.state.selected_adventure} />
            </div>
          </div>


        </div>
    );
  }
}
