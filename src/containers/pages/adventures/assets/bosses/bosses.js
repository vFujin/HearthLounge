import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {adventure_details} from '../../../../../data/adventure-details';

const Bosses = ({adventure}) => {
  const tableData = (wing, adventureUrl) => {
    let adventureDetailsFromUrl = adventure_details.filter(a => a.url === adventureUrl)
        .map(a => a.wings.details.map(w => w.url).some(w => w === wing.url))[0];

    const checkAdventure = (adventure, boss) => {
      let src = `https://raw.githubusercontent.com/vFujin/HearthLounge/master/src/images/adventures/${adventure}/${wing.url}/${boss.url}.jpg`;

      if (adventureDetailsFromUrl === true) {
        return <img src={src} alt={boss.name}/>
      }
    };

    return wing.bosses.map((boss, index) =>
        <td key={index} className={`${adventureUrl} active-on-hover`}>
          <Link to={`/adventures/${adventureUrl}/${wing.url}/${boss.url}`}>
            {checkAdventure(adventureUrl, boss)}
            <p>{boss.name}</p>
          </Link>
        </td>
    )
  };

  const bosses = () =>{
    return adventure_details.filter(a => a.url === adventure.url).map((a, index) =>
          <table key={index}>
            <tbody>
            {a.wings.details.map((wing, i) =>
                <tr key={i}>
                  <th className={`${adventure.url} active`}>{wing.wing_title}</th>
                  {tableData(wing, adventure.url)}
                </tr>
            )}
            </tbody>
          </table>
    );
  };

  return <div className="bosses">{bosses()}</div>;
};

export default Bosses;

Bosses.propTypes = {
  adventure: PropTypes.string.isRequired
};