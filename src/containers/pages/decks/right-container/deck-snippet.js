import React from 'react';
export const DeckSnippet = (props) => {
  return (
    <tr className={`deck-snippet ${props.class} table-row`}>

      <td className="name">
          <span className={`hs-icon icon-${props.class}`}></span>
          <div className="name-details">
            <p className="title">Top 10 legend {props.class}</p>
            <p className="author">stworzone przez (authorname)</p>
        </div>
      </td>
      <td className="class">{props.class}</td>
      <td className="rating">42</td>
      <td className="views">1337</td>
      <td className="mana-curve">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </td>
      <td className="type">Reno{props.class}</td>
      <td className="created">
        <p>4 dni temu</p>
      </td>
    </tr>
  );
};

export default DeckSnippet;