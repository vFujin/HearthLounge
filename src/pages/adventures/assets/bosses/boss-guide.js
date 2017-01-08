import React, { Component } from 'react';
// import unirest from 'unirest';
import {BossGuideNav} from './boss-guide-nav';
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
      return (
          <div className={this.props.activeBossView}>
            <div className="boss-guide-header">
              <p>{this.props.activeBoss}</p>
              <BossGuideNav selectedAdventureUrl={this.props.selectedAdventureUrl}
                            selectedTopbarTab={this.props.selectedTopbarTab}
                            activeBoss={this.props.activeBoss}
                            activeBossUrl={this.props.activeBossUrl}/>
            </div>

            <div className="cards-container">
              <img src={this.props.activeBossImg} alt=""/>
            </div>
           </div>
      );
  }
}