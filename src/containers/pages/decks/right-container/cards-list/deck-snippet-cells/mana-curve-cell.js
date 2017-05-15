import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ManaCurve = ({deckUrl, deck, cards}) =>{



    // console.log(Object.keys(deck.manaCurve));


  return (
        <Link to={deckUrl}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Link>
  )

};

export default ManaCurve;