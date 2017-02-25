import React from 'react';
import { Link } from 'react-router'
export const ClassSelectionRow = (props) => {
  return (
      <td onClick={props.handleChoosenClassClick} className={props.elementEn} data-api={props.elementApi}>
        <Link to={`/create-deck/${props.elementUrl}`} data-api={props.elementApi}>
          <div className="wrapper"  data-api={props.elementApi}>
            <span className={`hs-icon icon-${props.elementEn}`} data-api={props.elementApi}></span>
            <p data-api={props.elementApi}>{props.elementPl}</p>
          </div>
        </Link>
      </td>
  )
};

export default ClassSelectionRow;