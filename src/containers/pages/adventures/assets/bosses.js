import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../../data/adventure-details';
export class AdventureBosses extends Component {
  constructor(props){
    super(props);
  }

  tableData(wing, adventure){
    let adventureDetailsFromUrl = adventure_details.filter(x=>x.adventure===adventure).map(x=>x.bosses.details.map(x=>x.url).some(x=>x === wing.url))[0];

    function checkAdventure(adventure, boss){
      if(adventureDetailsFromUrl === true) {
        return <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${wing.url}/${boss.url}.jpg`} alt={boss.boss}/>
      }
    }
    return wing.bosses.map((boss, index)=>
        <td key={index} className={`${adventure} active-on-hover`}>
          <Link to={`/adventures/${adventure}/${wing.url}/${boss.url}`}>
            {checkAdventure(adventure, boss)}
            <p>{boss.boss}</p>
          </Link>
        </td>
    )
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
                    {this.tableData(wing, this.props.adventure)}
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