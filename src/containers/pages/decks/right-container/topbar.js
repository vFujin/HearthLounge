import React, { Component } from 'react';
import HsClassFilter from '../left-container/filters/hs-class';
import CreateDeck from './cards-list/create-deck-icon';
import {ChoosenDeckTopbar} from '../choosen-deck/topbar/topbar';
export class Topbar extends Component {
  render() {
    return (
        <div className={`topbar`}>
          <div className={`filters ${this.props.decksTopbar}`}>
            <HsClassFilter/>
            <CreateDeck/>
          </div>
          <div className={`deck ${this.props.choosenDeckTopbar}`}>
            <ChoosenDeckTopbar/>
          </div>
        </div>
    );
  }
}