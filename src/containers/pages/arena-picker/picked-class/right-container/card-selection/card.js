import React, { Component } from 'react';
import Select from 'react-select';
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
        <Select
            placeholder={`Podaj nazwę ${this.props.placeholder} karty...`}
            value={this.state.value}
            options=''
            onChange=''
        />
      </li>
    );
  }
}