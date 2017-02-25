import React from 'react';
import {hs_class} from '../../../data/filters';
import { Link } from 'react-router'
const ClassSelectionRow = (props) =>{
  return (
    <tr>
      {hs_class.slice(props.start, props.end).map(hs_class =>
        <td key={hs_class.url} className={hs_class.url}>
          <Link to={`/${props.page}/${hs_class.url}`}>
            <div className="wrapper">
              <span className={`hs-icon icon-${hs_class.url}`}></span>
              <p>{hs_class.name}</p>
            </div>
          </Link>
        </td>
      )}
    </tr>
  )
};

export default ClassSelectionRow;