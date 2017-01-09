import React, { Component } from 'react';
import {Link} from 'react-router';
import {adventure_details} from '../../../data/adventure-details';
import {BossGuide} from './boss-details/boss-guide';
export class AdventureBosses extends Component {
  render() {
    return (
        <div className={`bosses inner-container ${this.props.active === 'bosses' && 'active'}-view`}>
          {adventure_details.map((element, index)=>
            <div className={`${this.props.sidebarActiveTab === element.adventure && 'active'}-view`} key={index}>
              <div className={this.props.activeTableView}>
                <p>{element.bosses.description}</p>
                <table>
                  <tbody>
                  {element.bosses.details.map((element,index)=>
                  <tr key={index}>
                    <th className={`${this.props.sidebarActiveTab} active`}>{element.wing_title}</th>
                    {element.bosses.map((element, index)=>
                      <td key={index}
                          onClick={this.props.handleBossClick}
                          data-boss={element.boss}
                          data-url={element.url}
                          data-img={element.img}
                          className={`${this.props.sidebarActiveTab} active-on-hover`}>
                        <Link data-boss={element.boss} data-img={element.img} data-url={element.url} to={`/przygody/${this.props.selectedAdventureUrl}/${this.props.selectedTopbarTab}/${element.url}`}>
                          <img data-boss={element.boss}
                               data-url={element.url}
                               data-img={element.img}
                               src={element.img}
                               alt={`${element.boss}'s illustration`}/>
                          <p key={index} data-boss={element.boss} data-img={element.img} data-url={element.url}>{element.boss}</p>
                        </Link>
                      </td>
                    )}
                  </tr>
                  )}
                  </tbody>
                </table>
              </div>
              <BossGuide selectedAdventureUrl={this.props.selectedAdventureUrl}
                         adventure={this.props.adventure}
                         selectedTopbarTab={this.props.selectedTopbarTab}
                         activeBossView={this.props.activeBossView}
                         activeBoss={this.props.activeBoss}
                         activeBossUrl={this.props.activeBossUrl}
                         activeBossImg={this.props.activeBossImg} />
            </div>
          )}
        </div>
    );
  }
}