import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const ManaCurve = ({el, hsClass, deck}) =>{
  return (
      <td key={el} className={el}>
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
      </td>
  )
};

export default ManaCurve;