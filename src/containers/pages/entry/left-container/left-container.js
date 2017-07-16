import React, {Component} from 'react';
import {Carousel} from './assets/carousel';
import {carousel} from './assets/data';
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
        <div className="container__page--inner container__page--left">
          <div className="topbar">
            {this.dots()}
          </div>
          <Carousel handleCurrentDotChange={this.handleCurrentDotChange.bind(this)} />
        </div>
    );
  }
}