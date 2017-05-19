import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ManaCurve = ({deckUrl, deck, hsClass}) =>{

  return (
        <Link to={deckUrl}>
          <ul>
            {deck.manaCurve.map((el, i)=> {
              return (
                  <li key={i}>
                    <span style={{height: `${(el/deck.max * 100 || 0)}%`}}></span>
                  </li>
              )})}
          </ul>
        </Link>
  )


};

export default ManaCurve;