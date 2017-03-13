import React from 'react';
import {Link} from 'react-router';
import {mana_cost} from '../../../data/filters';

const ManaCostFilter = props =>{
    const {query} = props;

    const queries = el =>{
      return Object.assign({}, query, {cost: el.mana_cost})
    };

    const listManaCrystals = () => {
      return (
        mana_cost.map((element, i) =>
          <li key={i} className={`mana-crystal ${query.cost === element.mana_cost ? 'active' : ''}`}>
            <Link to={{pathname: 'cards', query: queries(element)}}>
              <span className={`hs-icon icon-mana-${element.mana_cost}`}></span>
            </Link>
          </li>
        )
      )
    };

    return (
      <ul className="topbar-left">
        {listManaCrystals()}
      </ul>
  );
};

ManaCostFilter.propTypes = {
  query: React.PropTypes.object
};

export default ManaCostFilter;