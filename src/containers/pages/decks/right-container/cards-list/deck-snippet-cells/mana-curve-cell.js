import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ManaCurve = ({deckUrl, deck, hsClass}) =>{

  return (
        <Link to={deckUrl}>
          <ul>
            {deck.manaCurve.map(i=> {
              return (
                  <li>
                    <span style={{height: `${(i/deck.max * 100 || 0)}%`}}></span>
                  </li>
              )})}
          </ul>
        </Link>
  )


};

export default ManaCurve;