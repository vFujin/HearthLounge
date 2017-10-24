import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const ManaCurve = ({deckUrl, deck}) =>{
  console.log(deck);
  return <Link to={deckUrl}>
          <ul>
            {deck.manaCurve.map((el, i)=> {
              return (
                  <li key={i}>
                    <span style={{height: `${(el/deck.max * 100 || 0)}%`}}></span>
                  </li>
              )})}
          </ul>
        </Link>
};

export default ManaCurve;

ManaCurve.propTypes = {
  deck: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  deckUrl: PropTypes.string.isRequired
};