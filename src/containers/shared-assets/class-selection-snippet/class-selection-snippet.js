import React from 'react';
import {icon_filters} from '../../../data/filters';
import { Link } from 'react-router'
const ClassSelectionSnippet = (props) =>{

  const listClasses = () =>{
    return (
        icon_filters.playerClass.map(hs_class =>
            <li key={hs_class.url} className={hs_class.url}>
              <Link to={`/${props.page}/${hs_class.url}`}>
                <span className={`hs-icon icon-${hs_class.url}`}></span>
                <p>{hs_class.name}</p>
              </Link>
            </li>
        )
    )
  }

  return (
    <div className="container__page--inner container__class-selection">
      <h3>Choose class</h3>
      <ul>
        {listClasses()}
      </ul>
    </div>
  );
};


export default ClassSelectionSnippet;