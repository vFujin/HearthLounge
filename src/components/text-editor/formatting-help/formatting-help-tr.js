import React from 'react';
import PropTypes from 'prop-types';

const Tr = ({abbr, tool}) => {
  const CapitalizedAbbr = abbr;
  return (
      <tr>
        <td>[{abbr}]{tool}[/{abbr}]</td>
        <td>
          <CapitalizedAbbr className={abbr === 'card' && 'in-text legendary'}>
            {tool}
          </CapitalizedAbbr>
        </td>
      </tr>
  )
};

export default Tr;

Tr.propTypes = {
  abbr: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired
};