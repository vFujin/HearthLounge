import React, { Component } from 'react';
import {Link} from 'react-router';
import {boss_details} from '../../../../data/boss_details';
import {DeckSnippet} from './deck-snippet/deck-snippet';
export class BossGuideNav extends Component {
  render() {
    return (
        <ul>
          <li>
            <Link to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${boss_details[0].title}`}>
              <p className="boss-details-nav-el">{boss_details[0].title}</p>
              <p>{boss_details[0].content}</p>
            </Link>
          </li>
          <li>
            <Link to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${boss_details[1].title}`}>
              <p className="boss-details-nav-el">{boss_details[0].title}</p>
              <p>${boss_details[1].content}</p>
            </Link>
          </li>
          <li>
            <Link to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${boss_details[2].title}`}>
              <p className="boss-details-nav-el">{boss_details[0].title}</p>
              <p>${boss_details[2].content}</p>
            </Link>
          </li>
          <li>
            <Link to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${boss_details[3].title}`}>
              <p className="boss-details-nav-el">{boss_details[0].title}</p>
              <p>${boss_details[3].content}</p>
            </Link>
          </li>
          <li>
            <Link to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${this.props.activeBossUrl}/${boss_details[4].title}`}>
              <p className="boss-details-nav-el">{boss_details[0].title}</p>
              <div className="top-boss-decks">
                <DeckSnippet />
                <DeckSnippet />
                <DeckSnippet />

              </div>
            </Link>
          </li>
        </ul>
    );
  }
}