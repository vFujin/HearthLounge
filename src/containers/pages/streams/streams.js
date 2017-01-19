import React, { Component } from 'react';
import unirest from 'unirest';

export class Streams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };

  }

  componentDidMount() {
    unirest.get("https://api.twitch.tv/kraken/games/")
        .header("Client-ID", "jupouny3vvr7kl38jlsj7ssnyww80z")
        .end(res => {
          console.log(res);
          this.setState({
            cards: res.body
          });

        });
  }


  render() {
    return (
        <div className="pageContainer streams">
          <ul className={`cards`}>
            {this.state.cards.map((card, i)=>
                <li key={i}>
                  <img src={card} alt={`${card}`}/>
                </li>
            )}
          </ul>
        </div>
    );
  }
}