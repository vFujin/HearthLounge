import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {icon_filters} from '../../../globals/filters';

const ClassSelectionSnippet = ({page, updatePlayerClass}) =>{

  const handleClassSelection = (e) =>{
    let playerClass = e.currentTarget.id;
    updatePlayerClass(playerClass)
  };

  const listClasses = () =>{
    return (
        icon_filters.playerClass.map(hs_class =>
            <li key={hs_class.url}
                className={hs_class.url}
                id={hs_class.url}
                onClick={handleClassSelection}>
              <Link to={`/${page}/${hs_class.url}`}>
                <span className={`hs-icon icon-${hs_class.url}`}></span>
                <p>{hs_class.name}</p>
              </Link>
            </li>
        )
    )
  };

  return (
    <div className={`container__page container__page--oneSided create-deck`}>
      <div className="container__page--inner container__class-selection">
        <h3>Choose class</h3>
        <ul>
          {listClasses()}
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch({
      type: 'UPDATE_PLAYERCLASS', playerClass
    }))
  }
};

export default connect(null, mapDispatchToProps)(ClassSelectionSnippet)