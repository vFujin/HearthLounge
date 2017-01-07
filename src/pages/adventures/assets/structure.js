import React, { Component } from 'react';
import { adventure_details } from '../../../data/adventure-details';
export class AdventureStructure extends Component {
  render() {
    return (
        <div className={`structure inner-container ${this.props.active === 'structure' && 'active'}-view`}>
          {adventure_details.map((element, index)=>
              <div className={`${this.props.adventure === element.adventure && 'active'}-view`} key={index}>
                <ul>
                  <li>{element.structure.wing_amount} skrzydeł</li>
                  <li>
                    <ul>
                      {element.structure.wing_details.map((element,index)=>
                        <li key={index}>{element}</li>
                      )}
                    </ul>
                  </li>
                  <li>{element.structure.bosses_amount} bossów</li>
                  <li>{element.structure.class_challanges} wyzwań klasowych</li>
                  <li>{element.structure.class_challanges_details}</li>
                </ul>
              </div>
          )}
        </div>
    );
  }
}