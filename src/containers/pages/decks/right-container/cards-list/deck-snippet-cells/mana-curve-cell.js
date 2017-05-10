import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const ManaCurve = ({hsClass, deck, cards}) =>{

  if(cards !== undefined){

    console.log(cards);
  }

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