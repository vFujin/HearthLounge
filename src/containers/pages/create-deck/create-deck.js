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
    console.log("Choosen class state (state should be empty): " +this.state.choosen_class);
  }
  handleClassSelectionClick() {
    //For switching views
    let displayNone = this.state.displayNone === 'displayNone' ? 'displayInlineFlex' : 'displayNone';
    let displayInlineFlex = this.state.displayInlineFlex === 'displayInlineFlex' ? 'displayNone' : 'displayInlineFlex';
    this.setState({
      displayNone: displayNone,
      displayInlineFlex: displayInlineFlex
    });
  }

  handleChoosenClassClick(event){
    //For taking choosen class data
    console.log("Click event launched (state should receive data-class attribute): " + this.state.choosen_class);
    let choosenClass = event.target.dataset['api'];

    this.setState({
      choosen_class: choosenClass
    });
  }

  componentWillReceiveProps()  {
    console.log("Component mounted (state should be set before mounting): " + this.state.choosen_class);
    unirest.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/${this.state.choosen_class}?collectible=1&locale=plPL`)
        .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
        .end(res => {
          console.log("GET https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/{class}?collectible=1&locale=plPL <- should be like this");
          console.log("State should be ({class}): " + this.state.choosen_class, res.body);
          this.setState({
            cards: res.body.slice(0, 18)
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