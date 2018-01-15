import React  from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {adventure_details} from '../../../../globals/adventure-details';
import {adventureWingExists, adventureBossExists} from '../../../../utils/checkIfPathExist';

const Topbar = ({adventure, details, boss, windowWidth}) => {

  const bossesTab = (detail) => {
    if (adventureWingExists("adventures", adventure, details) && adventureBossExists("adventures", adventure, details, boss)) {
      if(windowWidth <= 1365) {
        return _.startCase(boss);
      }
      return `${detail.name} > ${_.startCase(details)} > ${_.startCase(boss)}`;
    }
    else return detail.name
  };

  const listDetails = () => (
      adventure_details.find(a => a.url === adventure).extension_topbar_tabs.map((detail, index) =>
          <li key={index} className={`${adventure} ${detail.url === details ?'active' : undefined}`}>
            <Link to={`/adventures/${adventure}/${detail.url}`}>
              {detail.url === 'bosses' ? bossesTab(detail) : detail.name}
            </Link>
          </li>
      )
  );

  return (
      <div className='topbar'>
        <ul className="topbar__extension-navigation">
          {listDetails()}
        </ul>
      </div>
  );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Topbar);

Topbar.propTypes = {
  adventure: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  boss: PropTypes.string
};