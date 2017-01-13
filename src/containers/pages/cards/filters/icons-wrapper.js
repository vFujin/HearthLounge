import React, { Component } from 'react';

export class IconsWrapper extends Component {
  render() {
    return (
          <div>
              <span className={`${this.props.active === this.props.index && 'active'} hs icon-${this.props.icon_name} ${this.props.element_name}`}></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>{this.props.label}</p>
              </div>
          </div>
    );
  }
}