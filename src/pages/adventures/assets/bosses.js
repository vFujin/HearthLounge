import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../data/adventure-details';
import {BossGuide} from './bosses/bosses';
export class AdventureBosses extends Component {
  render() {
    return (
        <div className={`bosses inner-container ${this.props.active === 'bosses' && 'active'}-view`}>
          {adventure_details.map((element, index)=>
            <div className={`${this.props.adventure === element.adventure && 'active'}-view`} key={index}>
              <p>{element.bosses.description}</p>
              <table>
                <tbody>
                {element.bosses.details.map((element,index)=>
                <tr key={index}>
                  <th className={`${this.props.adventure} active`}>{element.wing_title}</th>
                  {element.bosses.map((element, index)=>
                    <td key={index} onClick={this.props.handleBossClick} data-boss={element.boss}>
                      <Link data-boss={element.boss} to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${element.url}`}>
                        <img data-boss={element.boss} src={element.img} alt={`${element.boss}'s illustration`}/>
                        <p data-boss={element.boss} key={index}>{element.boss}</p>
                      </Link>
                    </td>
                  )}
                </tr>
                )}
                </tbody>
              </table>
              <BossGuide activeBoss={this.props.activeBoss}/>
            </div>
          )}

        </div>
    );
  }
}