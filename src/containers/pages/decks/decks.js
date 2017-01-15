import React, { Component } from 'react';
import {Sidebar} from './left-container/sidebar';
import {Topbar} from './right-container/topbar';
import {DecksTable} from './right-container/decks-table';
export class Decks extends Component {
  render() {
    return (
        <div className="pageContainer decks">
          <div className="left-container">
            <Sidebar/>
          </div>
          <div className="right-container">
            <Topbar/>

            <div className="top-decks">
                {/*<h3>Top standard decks</h3>*/}
                <DecksTable/>
            </div>
            <div className="picked-deck">
            {/*
                mana curve
                rating
                class icon
                title
                author
                mode (standard / wild)
                time when created
                type
                archetype
                crafting cost / dust cost
                patch when created?
                --------
                card list
                description
                comment section


            */}
            </div>
          </div>
        </div>
    );
  }
}