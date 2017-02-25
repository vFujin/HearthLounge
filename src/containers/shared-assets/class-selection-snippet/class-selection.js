import React, { Component } from 'react';
import ClassSelectionRow from './class-selection-row';
const ClassSelectionSnippet = (props) =>{
  return (
    <div className="class-selection">
      <table className="pick-class">
        <tbody>
        <tr>
          <th colSpan="3">Choose class</th>
        </tr>
        <ClassSelectionRow start="0" end="3" page={props.page}/>
        <ClassSelectionRow start="3" end="6" page={props.page}/>
        <ClassSelectionRow start="6" end="9" page={props.page}/>
        </tbody>
      </table>
    </div>
  );
};

export default ClassSelectionSnippet;