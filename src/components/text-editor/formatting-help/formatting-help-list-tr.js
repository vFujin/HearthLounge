import React from 'react';
import PropTypes from 'prop-types';

const TrList = ({abbr, tool}) => {
  const CapitalizedAbbr = abbr;

  return (
      <tr className="lists">
        <td>
          <p>[{abbr}]</p>
          <p><p>[li]{tool}[/li]</p></p>
          <p><p>[li]{tool}[/li]</p></p>
          <p><p>[li]{tool}[/li]</p></p>
          <p>[/{abbr}]</p>
        </td>
        <td>
          <CapitalizedAbbr>
            <li>{tool}</li>
            <li>{tool}</li>
            <li>{tool}</li>
          </CapitalizedAbbr>
        </td>
      </tr>
  )
};

export default TrList;

TrList.propTypes = {
  abbr: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired
};