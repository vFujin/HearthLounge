import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

const DefaultCell = ({props, deckUrl, el}) =>{
  return (
      <td key={el}>
        <Link to={deckUrl}>{_.startCase(props[el])}</Link>
      </td>
  )
};

DefaultCell.propTypes = {
  props: PropTypes.object,
  deckUrl: PropTypes.string.isRequired,
  el: PropTypes.string
};

export default DefaultCell;