import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const About = ({about}) => {
  const {announce_date, release_date, no_cards, description} = about;

  const Li = ({label, value}) =>{
    return (
      <li>
        <p>{_.startCase(label)}: <span>{value}</span></p>
      </li>
    )
  };

  return (
      <ul className="container__blocks--block-content about">
        <Li label="announced" value={announce_date}/>
        <Li label="released" value={release_date}/>
        <Li label="number of cards" value={no_cards}/>
        <li className="description">
          <p><span>{description}</span></p>
        </li>
      </ul>
  )
};

export default About;

About.propTypes = {
  about: PropTypes.object.isRequired
};