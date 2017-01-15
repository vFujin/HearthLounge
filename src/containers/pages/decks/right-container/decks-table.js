import React, { Component } from 'react';
import DeckSnippet from './deck-snippet';
export class DecksTable extends Component {
  render() {
    return (
        <table>
          <tbody>
          <tr>
            <td className="name">Nazwa talii kart</td>
            <td className="class">Klasa</td>
            <td className="rating">Głosy</td>
            <td className="views">Wyświetlenia</td>
            <td className="mana-curve">Mana</td>
            <td className="type">Typ</td>
            <td className="created">Stworzony</td>
          </tr>
          <DeckSnippet class="warlock"/>
          <DeckSnippet class="hunter"/>
          <DeckSnippet class="mage"/>
          <DeckSnippet class="rogue"/>
          <DeckSnippet class="priest"/>
          <DeckSnippet class="priest"/>
          <DeckSnippet class="warlock"/>
          <DeckSnippet class="druid"/>
          <DeckSnippet class="shaman"/>
          <DeckSnippet class="warrior"/>
          <DeckSnippet class="shaman"/>
          <DeckSnippet class="shaman"/>
          <DeckSnippet class="warlock"/>
          <DeckSnippet class="hunter"/>
          <DeckSnippet class="druid"/>
          <DeckSnippet class="paladin"/>
          <DeckSnippet class="druid"/>
          <DeckSnippet class="warlock"/>
          <DeckSnippet class="rogue"/>
          </tbody>
        </table>
    );
  }
}