import React, { Component } from 'react';
import DeckSnippet from '../right-container/cards-list/deck-snippet';
export class DeckSelection extends Component {
  render() {
    return (
        <div className="top-decks">
          <table className="shared-table">
            <tbody>
            <tr>
              <td className="name">Name</td>
              <td className="class">Class</td>
              <td className="rating">Rating</td>
              <td className="views">Views</td>
              <td className="mana-curve">Mana</td>
              <td className="type">Type</td>
              <td className="created">Created</td>
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