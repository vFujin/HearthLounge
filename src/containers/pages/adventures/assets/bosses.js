import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../../data/adventure-details';
export class AdventureBosses extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className={`bosses inner-container ${this.props.adventure && 'active'}-view`}>
          {adventure_details.map((adventure, index)=>
            <div className={`${this.props.adventure === adventure.adventure && 'active'}-view`} key={index}>
              <div>
                <p>{adventure.bosses.description}</p>
                <table>
                  <tbody>
                  {adventure.bosses.details.map((wing,i)=>
                  <tr key={i}>
                    <th className={`${this.props.adventure} active`}>{wing.wing_title}</th>
                    {wing.bosses.map((boss, index)=>

                      <td key={index} className={`${this.props.adventure} active-on-hover`}>
                        <Link to={`/adventures/${this.props.adventure}/${wing.url}/${boss.url}`}>
                          <img src={boss.img} alt={boss.boss}/>
                          <p>{boss.boss}</p>
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