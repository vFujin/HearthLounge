import React, { Component } from 'react';
import {adventure_details} from '../../../data/adventure-details';
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
                    <td key={index}>
                      <div>
                        <img src={element.img} alt={`${element.img}'s image`}/>
                        <p key={index}>{element.boss}</p>
                      </div>
                    </td>
                  )}
                </tr>
                )}

                </tbody>
              </table>
            </div>
          )}
        </div>
    );
  }
}