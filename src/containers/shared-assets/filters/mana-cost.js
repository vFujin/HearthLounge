import React, { Component } from 'react';
import {Link} from 'react-router';
import {mana_cost} from '../../../data/filters';

export class ManaCostFilter extends Component {
  render() {

    return (
        <ul className="topbar-left">
          {mana_cost.map((element, i) =>
              <li value={`mana-cost-${element.mana_cost}`} key={i}>
                {console.log(this.props.query)}
                <Link
                    to={{pathname: 'cards', query: Object.assign({}, this.props.query, {cost: element.mana_cost})}}>
                    {/*query={Object.assign({}, this.props.query, {cost: element.mana_cost})}>*/}
                  <span className={`hs hs-icon icon-mana-${element.mana_cost} ${i && 'mana-active'}`}></span>
                </Link>
              </li>
          )}
        </ul>
  );
  }
}