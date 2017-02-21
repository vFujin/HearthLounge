import React, { Component } from 'react';
import { adventure_details } from '../../../../data/adventure-details';
export class AdventureStructure extends Component {
  render() {
    return (
        <div className={`structure inner-container ${this.props.details === 'structure' && 'active'}-view`}>
          {adventure_details.map((adventure, index)=>
              <div className={`${this.props.adventure === adventure.adventure && 'active'}-view`} key={index}>

                <ul>
                  <li>{adventure.structure.wing_amount} wings</li>
                  <li>
                    <ul>
                      {adventure.structure.wing_details.map((element,index)=>
                        <li key={index}>{element}</li>
                      )}
                    </ul>
                  </li>
                  <li>{adventure.structure.bosses_amount} bosses</li>
                  <li>{adventure.structure.bosses_difficulty}</li>
                  <li>{adventure.structure.class_challanges} class challanges</li>
                  <li>{adventure.structure.class_challanges_details}</li>
                </ul>
              </div>
          )}
        </div>
    );
  }
}