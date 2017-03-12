import React from 'react';
import {Link} from 'react-router';

const NotFound = props => {
  const{page, redirect} = props;

  const pluralize = () =>{
    if(page) {
      let last_letter = page.substr(-1);
      console.log(page);

      if ("shhxz".indexOf(last_letter) !== -1) return `${page}es`;
      else return `${page}s`;
    }
  };

  return (
      <div className={`not-found`}>
        <div className="wrapper">
          <div className="lost">
            <span className="hs-icon icon-mana-4"></span>
            <span className="hs-icon icon-hs_logo"></span>
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