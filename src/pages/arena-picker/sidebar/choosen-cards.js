import React, { Component } from 'react';

export class ChoosenCards extends Component {
  render() {
    return (
        <table>
          <tr>
            <th>Karty</th>
            <th>Koszt</th>
          </tr>
          <tr>
            <td>test</td>
            <td><span className="hs-icon icon-mana-8"></span></td>
          </tr>
          <tr>
            <td>test</td>
            <td><span className="hs-icon icon-mana-5"></span></td>
          </tr>

        </table>
    );
  }
}