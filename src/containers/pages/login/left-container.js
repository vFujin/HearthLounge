import React, {Component} from 'react';
import {Carousel} from './carousel';
import {carousel} from './data';
export class LeftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_dot: 0,
    }
  }

  handleCurrentDotChange(current_dot) {
    this.setState({
      current_dot: current_dot
    })
  }

  dots() {
    return (
        <ul>
          {carousel.map((active, index) =>
              <li key={index} className={this.state.current_dot === index ? 'active' : index}>{active.dot}</li>
          )}
        </ul>
    )
  }

  render() {
    return (
        <div className="left-container">
          <div className="topbar">
            {this.dots()}
          </div>
          <div className="breakline h-breakline"></div>
          <Carousel handleCurrentDotChange={this.handleCurrentDotChange.bind(this)} />
        </div>
    );
  }
}