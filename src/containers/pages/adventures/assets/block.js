import React from 'react';
import PropTypes from 'prop-types';

const Block = ({page, title, element}) =>{
  return (
      <li className={`container__blocks--block ${page}`}>
        <h4 className="container__blocks--block-header">{title}</h4>
        {element}
      </li>
  )
};

export default Block;

Block.propTypes = {
  page: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired
};