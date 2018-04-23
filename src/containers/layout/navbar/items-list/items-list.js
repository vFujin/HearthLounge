import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import { NavLink } from 'react-router-dom';
import {navItems} from "../../../../globals/nav";
import Icon from "../../../../components/icon";
import './items-list-styles.css';
import Dropdown from "./dropdown";

const ItemsList = ({playerClass, mobileMenuActive}) => {

  const redirect = (name, playerClass) =>{
    switch(name){
      case 'home': return '';
      case 'create-deck': {
        if(playerClass) return `${name}/${playerClass}`;
        return name;
      }
      default: return name;
    }
  };

  return navItems.map((element, index) =>
    <li key={index} className={`nav__list--item ${element.name}`}>
      <NavLink className="nav__list--linkContainer"
               to={`/${redirect(element.name, playerClass)}`}
               activeClassName={element.name !== 'home' ? "active" : ""}>
        <div className="nav__list--link">
          <Icon name={element.icon}/>
          <div>{_.startCase(element.name)}</div>
          {!mobileMenuActive && <Dropdown element={element} index={index}/>}
        </div>
      </NavLink>
    </li>
  );
};

ItemsList.propTypes = {
  playerClass: PropTypes.string,
  mobileMenuActive: PropTypes.bool
};

ItemsList.defaultProps = {
  playerClass: undefined,
  mobileMenuActive: false,
};

export default ItemsList;