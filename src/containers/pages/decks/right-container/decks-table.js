import React, { Component } from 'react';
import DeckSnippet from './deck-snippet';
export class DecksTable extends Component {
  render() {
    return (
        <table>
          <tbody>
          <tr>
            <td className="name">Deck Name</td>
            <td className="rating">Rating</td>
            <td className="views">Views</td>
            <td className="mana-curve">Mana</td>
            <td className="type">Type</td>
            <td className="created">Created</td>
          </tr>
          <DeckSnippet classs="warlock"/>
          <DeckSnippet classs="hunter"/>
          <DeckSnippet classs="mage"/>
          <DeckSnippet classs="rogue"/>
          <DeckSnippet classs="priest"/>
          <DeckSnippet classs="priest"/>
          <DeckSnippet classs="warlock"/>
          <DeckSnippet classs="druid"/>
          <DeckSnippet classs="shaman"/>
          <DeckSnippet classs="warrior"/>
          <DeckSnippet classs="shaman"/>
          </tbody>
        </table>
    );
  }
}