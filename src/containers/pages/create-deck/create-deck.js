import React, {Component} from 'react';
import unirest from 'unirest';


import ClassSelectionView from './picked-class/right-container/class-selection/class-selection-view';
import {ChoosenClassView} from './picked-class/right-container/choosen-class-selection/choosen-class-view';
export class CreateDeck extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayNone: 'displayNone',
      displayInlineFlex: 'displayInlineFlex',
      cards: [],
      choosen_class: ''
    };
  }
  handleClassSelectionClick() {
    let displayNone = this.state.displayNone === 'displayNone' ? 'displayInlineFlex' : 'displayNone';
    let displayInlineFlex = this.state.displayInlineFlex=== 'displayInlineFlex' ? 'displayNone' : 'displayInlineFlex';
    this.setState({
      displayNone: displayNone,
      displayInlineFlex: displayInlineFlex
    });
  }

  handleChoosenClassClick(event){
    let choosenClass = event.target.dataset['api'];
    console.log("Taken data: " + choosenClass);
    this.setState({
      choosen_class: choosenClass
    });
  }

  componentWillReceiveProps() {
    console.log("Before response: " + this.state.choosen_class);
    unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${this.state.choosen_class}?collectible=1&locale=plPL`)
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          console.log("After response: " + this.state.choosen_class);
          this.setState({
            cards: res.body.slice(0, 12)
          });

        });

  }

  render(){
    return(
        <div className="pageContainer create-deck">
          <ClassSelectionView handleClassSelectionClick={this.handleClassSelectionClick.bind(this)}
                              handleChoosenClassClick={this.handleChoosenClassClick.bind(this)}
                              displayInlineFlex={this.state.displayInlineFlex} />
          <ChoosenClassView display={this.state.displayNone} cards={this.state.cards} choosen_class={this.state.choosen_class}/>
        </div>
    )
  }
}