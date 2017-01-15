import React, { Component } from 'react';
import DeckSnippet from './deck-snippet';
export class DecksTable extends Component {
  render() {
    return (
        <div className={`top-decks `}>
          <table className={this.props.deckList}>
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
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="warlock"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="hunter"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="mage"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="rogue"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="priest"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="priest"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="warlock"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="druid"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="shaman"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="warrior"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="shaman"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="shaman"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="warlock"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="hunter"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="druid"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="paladin"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="druid"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="warlock"/>
            <DeckSnippet handleTableRowClick={this.props.handleTableRowClick} class="rogue"/>
            </tbody>
          </table>
        </div>
    );
  }
}