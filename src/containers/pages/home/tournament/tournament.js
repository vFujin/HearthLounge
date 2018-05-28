import React from 'react';
import format from "date-fns/format";
import PropTypes from 'prop-types';

const Tournament = ({tournament}) => {
  const tournamentDateFormat = 'D/M HH:mm';

  return (
    <li className="tournament" key={tournament.id}>
      <a href={tournament.htmlLink} target="_blank" rel="noopener noreferrer">
        <p className="tournament__date">{format(tournament.start.dateTime, tournamentDateFormat)}</p>
        <p className="tournament__title">
          {tournament.summary}
        </p>
      </a>
    </li>
  )
};

Tournament.propTypes = {
  tournament: PropTypes.object
};

export default Tournament;