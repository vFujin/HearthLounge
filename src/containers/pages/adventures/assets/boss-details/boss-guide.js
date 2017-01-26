import React, { Component } from 'react';
// import unirest from 'unirest';
import {boss_details} from '../../../../data/boss-details';
import {DeckSnippet} from '../../../../shared-assets/deck-snippet/deck-snippet';
export class BossGuide extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cards: []
  //
  //   };
  //   console.log(this.state.cards);
  // }

  // componentWillReceiveProps() {
  //   console.log('mounted');
  //   unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?locale=plPL")
  //       .header("X-Mashape-Key", "d33SgqkTnSmshYMsQH4KAZvYyT96p1mORdSjsnYHknwZaVgraf")
  //       .end(res => {
  //         let adventure = this.props.adventure;
  //         let boss = this.props.activeBoss === res.body[adventure];
  //         console.log(res.body[adventure], adventure);
  //         this.setState({
  //           cards: res.body[adventure][0].name
  //         });
  //         console.log(this.state.cards);
  //       });
  // }


  render() {
    function ifHasImg(index, boss, rewards){
      if(index===0){
        return <img src={boss} alt={`${boss}'s illustration`}/>;
      }
      if(index===2){
        return <img src={rewards} alt={`${rewards}'s illustration`}/>;
      }
    }
    return (
      <div className={this.props.activeBossView}>
        <div className="boss-guide-header">
          <p className="boss-details-nav-el">{this.props.activeBoss}</p>
          <ul>
            {boss_details.slice(0,4).map((element, index)=>
              <li className="block" key={index}>
                <div className="block-content">
                  <p className="boss-details-nav-el">{element.title}</p>
                  {ifHasImg(index, this.props.activeBossImg, 'x')}
                  <p>{element.content}</p>
                </div>
              </li>
            )}
            {boss_details.slice(4,5).map((element, index)=>
              <li className="block" key={index}>
                <div className="block-content">
                  <p className="boss-details-nav-el">{element.title}</p>
                  <div className="top-boss-decks">
                    <DeckSnippet />
                    <DeckSnippet />
                    <DeckSnippet />
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}