import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NotFound = ({page, redirect, below_topbar}) => {

  const pluralize = () =>{
    if(page) {
      let last_letter = page.substr(-1);
      console.log(page);

      if ("shhxz".indexOf(last_letter) !== -1) return `${page}es`;
      else return `${page}s`;
    }
  };

  return (
      <div className={`not-found ${below_topbar === true ? "below-topbar" : ""}`}>
        <div className="wrapper">
          <div className="lost">
            <span className="hs-icon icon-mana-4"></span>
            <span className="hs-icon icon-hs-logo"></span>
            <span className="hs-icon icon-mana-4"></span>
          </div>
          <div className="description">
            <p>Sorry, the <span>{page}</span> page you are looking for doesn't exist.</p>
            <p>Take a run around the block or tap the button below.</p>
            <button className="btn-pearl">
              <Link to={`/${redirect}`}>Go to the {pluralize()} page</Link>
            </button>
          </div>
        </div>
      </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  page: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  below_topbar: PropTypes.bool
};