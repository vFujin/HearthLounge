import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {extension_details} from "../../../globals/extension-details";

const Bosses = ({extensionType, extension}) => {
  const tableData = (wing, extensionUrl) => {
    let extensionDetailsFromUrl = extension_details[extensionType].filter(extension => extension.url === extensionUrl)
      .map(e => e.wings.map(w => w.url).some(w => w === wing.url))[0];

    const BossImg = ({boss}) => {
      if (extensionDetailsFromUrl) {
        return <img src={boss.img} alt={boss.name}/>
      }
    };

    return wing.bosses.map((boss, index) =>
      <td key={index} className={`${extensionUrl} active-on-hover`}>
        <Link to={`/extensions/${extensionUrl}/${wing.url}/${boss.url}`}>
          <BossImg boss={boss}/>
          <p>{boss.name}</p>
        </Link>
      </td>
    )
  };

  const bosses = () =>{
    return extension_details[extensionType].filter(e => e.url === extension.url).map((ext, index) =>
        <table key={index}>
          <tbody>
          {ext.wings.map((wing, i) =>
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
  extensionType: PropTypes.string.isRequired,
  extension: PropTypes.object.isRequired
};
