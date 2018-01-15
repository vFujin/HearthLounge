import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./icon";
import Button from "./buttons/button";
import history from '../globals/history';

const NotFound = ({page, redirect, below_topbar}) => {
  document.title = "Something's not quite right";

  const pluralize = () =>{
    if(redirect) {
      let last_letter = redirect.substr(-1);

      if ("hhxz".indexOf(last_letter) !== -1) return `${redirect}es`;
      else if("s".indexOf(last_letter !== -1)) return redirect;
      else return `${redirect}s`;
    }
    return "home";
  };

  const handleRedirectClick = () => redirect ? history.push(`/${redirect}`) : history.push('/');

  return (
      <div className={`not-found ${below_topbar === true ? "below-topbar" : ""}`}>
        <div className="wrapper">
          <div className="lost">
            <Icon type="mana" name="4" />
            <Icon name="hs-logo" />
            <Icon type="mana" name="4" />
          </div>
          <div className="description">
            <p>Sorry, the <span>{page}</span> page you are looking for doesn't exist.</p>
            <p>Take a run around the block or tap the button below.</p>
            <Button text={`Go to the ${pluralize()} page`} type="default--active" handleClick={handleRedirectClick}/>
          </div>
        </div>
      </div>
  );
};

export default NotFound;

NotFound.propTypes = {
  page: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  below_topbar: PropTypes.bool
};