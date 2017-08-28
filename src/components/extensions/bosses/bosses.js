import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {adventure_details} from "../../../data/adventure-details";
import {expansion_details} from "../../../data/expansion-details";

const data = (type) =>{
  return type === "adventures" ? adventure_details : expansion_details;
};

const Bosses = ({type, extension}) => {
  const tableData = (wing, extensionUrl) => {
    let extensionDetailsFromUrl = data(type).filter(e => e.url === extensionUrl)
        .map(e => e.wings.details.map(w => w.url).some(w => w === wing.url))[0];

    const checkAdventure = (extension, boss) => {
      let src = `https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/${type}/${extension}/${wing.url}/${boss.url}.jpg`;

      if (extensionDetailsFromUrl === true) {
        return <img src={src} alt={boss.name}/>
      }
    };

    return wing.bosses.map((boss, index) =>
        <td key={index} className={`${extensionUrl} active-on-hover`}>
          <Link to={`/${type}/${extensionUrl}/${wing.url}/${boss.url}`}>
            {checkAdventure(extensionUrl, boss)}
            <p>{boss.name}</p>
          </Link>
        </td>
    )
  };

  const bosses = () =>{
    return data(type).filter(e => e.url === extension.url).map((a, index) =>
        <table key={index}>
          <tbody>
          {a.wings.details.map((wing, i) =>
              <tr key={i}>
                <th className={`${extension.url} active`}>{wing.wing_title}</th>
                {tableData(wing, extension.url)}
              </tr>
          )}
          </tbody>
        </table>
    );
  };

  return <div className="container__bosses">{bosses()}</div>;
};

export default Bosses;

Bosses.propTypes = {
  type: PropTypes.string.isRequired,
  extension: PropTypes.object.isRequired
};