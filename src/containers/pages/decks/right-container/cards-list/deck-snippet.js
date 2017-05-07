import React from 'react';
import {Link} from 'react-router';
export const DeckSnippet = ({handleTableRowClick, hsClass, title, votes, deck, created, archetype, author, type}) => {
  return (
    <tr className={`deck-snippet ${hsClass} table-row`} onClick={handleTableRowClick}>

        <td className="name">
          <Link to={`/decks/${hsClass}/123`}>
            <span className={`hs-icon icon-${hsClass}`}></span>
            <div className="name-details">
              <p className="title">{title}</p>
              <p className="author">created by {author}</p>
            </div>
          </Link>
        </td>
        <td className="class">
          <Link to={`/decks/${hsClass}/123`}>
            {hsClass}
          </Link>
        </td>
        <td className="rating">
          <Link to={`/decks/${hsClass}/123`}>
            {votes}
          </Link>
        </td>
        <td className="views">
          <Link to={`/decks/${hsClass}/123`}>
            42
          </Link>
        </td>
        <td className="mana-curve">
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
        <td className="type">
          <Link to={`/decks/${hsClass}/123`}>
            {type}
          </Link>
        </td>
        <td className="created">
          <Link to={`/decks/${hsClass}/123`}>
            {created}
          </Link>
        </td>

    </tr>

  );
};

export default DeckSnippet;