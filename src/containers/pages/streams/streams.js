import React, { Component } from 'react';
// import 'whatwg-fetch'

// https://github.com/github/fetch

// import unirest from 'unirest';
import 'whatwg-fetch';
export class Streams extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cards: []
    };

  }

  componentDidMount() {
    // unirest.get("https://api.twitch.tv/kraken/users?login=dallas,dallasnchains")
    //     .header({
    //       "Accept": 'application/vnd.twitchtv.v5+json',
    //       "Client-ID": "jupouny3vvr7kl38jlsj7ssnyww80z"
    //     })
    //     .end(res => {
    //       console.log(res);
    //       this.setState({
    //         cards: res.body
    //       });
    //
    //     });
    fetch('/streams').then(function (res) {
      console.log(res)
    })
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