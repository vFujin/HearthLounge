import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ManaCurve = ({hsClass, deck, cards}) =>{



    // console.log(cards.filter(c=>c.cardId === ));


  return (
        <Link to={`/decks/${hsClass}/123`}>
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