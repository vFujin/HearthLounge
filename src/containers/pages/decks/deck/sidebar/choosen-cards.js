import React, { Component } from 'react';
import CardRow from './card-row';
export class ChoosenCards extends Component {
  render() {
    return (
        <table className="cards-list">
          <tbody>
            <tr>
              <th>Karty</th>
              <th>Koszt</th>
            </tr>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
            <CardRow/>
          </tbody>
        </table>
    );
  }
}