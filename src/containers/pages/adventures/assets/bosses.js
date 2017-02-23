import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../../data/adventure-details';
export class AdventureBosses extends Component {
  constructor(props){
    super(props);
  }

  tableData(wing, adventure){
    // let adventureDetailsFromUrl = adventure_details.map(x=>x.adventure === adventure)[0];
    let adventureDetailsFromUrl = adventure_details.map(x=>x.bosses.details);

    function checkAdventure(adventure, boss){
      console.log(adventure, adventureDetailsFromUrl, wing.url);

        return <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${wing.url}/${boss.url}.jpg`} alt={boss.boss}/>

    }
    console.log(adventureDetailsFromUrl);
    return wing.bosses.map((boss, index)=>
        <td key={index} className={`${adventure} active-on-hover`}>
          <Link to={`/adventures/${adventure}/${wing.url}/${boss.url}`}>
            <img src={`https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/adventures/${adventure}/${wing.url}/${boss.url}.jpg`} alt={boss.boss}/>

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