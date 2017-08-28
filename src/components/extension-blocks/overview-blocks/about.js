import React from 'react';
import PropTypes from 'prop-types';

const About = ({about}) => {
  return (
      <ul className="container__blocks--block-content about">
        foo
      </ul>
  )
};

export default About;

About.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string
};