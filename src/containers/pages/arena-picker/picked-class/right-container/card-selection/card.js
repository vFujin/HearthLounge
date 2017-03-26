import React, { Component } from 'react';
export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

  }
  render() {
    return (
      <li>
        <div className="card">
          <div className="symbol">+</div>
          {/*api*/}
        </div>
        <span className="select2-wrapper">

        </span>
      </li>
    );
  }
}