import React, { Component } from 'react';
import {Link} from 'react-router';
import {boss_details} from '../../../../data/boss_details';
export class BossGuideNav extends Component {
  render() {
    return (
        <ul>
          {boss_details.map((element,index)=>
              element.nav.map((element,index)=>
                <li className={element.en}>
                  <Link key={index} to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${element.url}`}>
                  {element.title}
                  </Link>
                </li>
              )
          )}
        </ul>
    );
  }
}