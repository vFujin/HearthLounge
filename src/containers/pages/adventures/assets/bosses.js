import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../../data/adventure-details';
export class AdventureBosses extends Component {
  render() {
    return (
        <div className={`bosses inner-container ${this.props.details === 'bosses' && 'active'}-view`}>
          {adventure_details.map((adventure, index)=>
            <div className={`${this.props.adventure === adventure.adventure && 'active'}-view`} key={index}>
              <div className={this.props.activeTableView}>
                <p>{adventure.bosses.description}</p>
                <table>
                  <tbody>
                  {adventure.bosses.details.map((wing,index)=>
                  <tr key={index}>
                    <th className={`${this.props.adventure} active`}>{wing.wing_title}</th>
                    {wing.bosses.map((boss, index)=>
                      <td key={index} className={`${this.props.adventure} active-on-hover`}>
                        <Link to={`/adventures/${this.props.adventure}/${this.props.details}/${boss.url}`}>
                          <img src={boss.img} alt={`${boss.boss}'s illustration`}/>
                          <p key={index}>{boss.boss}</p>
                        </Link>
                      </td>
                    )}
                  </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
    );
  }
}