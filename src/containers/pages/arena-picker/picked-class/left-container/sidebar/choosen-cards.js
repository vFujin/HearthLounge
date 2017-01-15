import React, { Component } from 'react';

export class ChoosenCards extends Component {
  render() {
    return (
        <table className="cards-list">
          <tbody>
            <tr>
              <th>Karty</th>
              <th>Koszt</th>
            </tr>
            <tr>
              <td>Backstab</td>
              <td><span className="hs-icon icon-mana-8"></span></td>
            </tr>
            <tr>
              <td>Backstab</td>
              <td><span className="hs-icon icon-mana-5"></span></td>
            </tr>
          </tbody>
        </table>
    );
  }
}