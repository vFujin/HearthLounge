import React from 'react';
import {Link} from 'react-router';
export const DeckSnippet = (props) => {
  return (
    <tr className={`deck-snippet ${props.class} table-row`} onClick={props.handleTableRowClick}>

        <td className="name">
          <Link to={`/talie-kart/${props.class}/123`}>
            <span className={`hs-icon icon-${props.class}`}></span>
            <div className="name-details">
              <p className="title">Top 10 legend {props.class}</p>
              <p className="author">stworzone przez (authorname)</p>
            </div>
          </Link>
        </td>
        <td className="class">
          <Link to={`/talie-kart/${props.class}/123`}>
            {props.class}
          </Link>
        </td>
        <td className="rating">
          <Link to={`/talie-kart/${props.class}/123`}>
            42
          </Link>
        </td>
        <td className="views">
          <Link to={`/talie-kart/${props.class}/123`}>
            1337
          </Link>
        </td>
        <td className="mana-curve">
          <Link to={`/talie-kart/${props.class}/123`}>
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
          <Link to={`/talie-kart/${props.class}/123`}>
            Reno{props.class}
          </Link>
        </td>
        <td className="created">
          <Link to={`/talie-kart/${props.class}/123`}>
          4 dni temu
          </Link>
        </td>

    </tr>

  );
};

export default DeckSnippet;