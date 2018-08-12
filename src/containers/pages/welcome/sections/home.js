import React from 'react';
import PropTypes from 'prop-types';
import HomeImg from '../../../../images/welcome/home.jpg'

const IntroductionSection = ({greetings}) => {

  return (
      <section className="introduction">
        <div>
          <h1>{greetings}</h1>
          <h1>Welcome to HearthLounge Alpha preview, an open source all-in-one webapp for Hearthstone players!</h1>

          <p>Tired of visiting multiple services for different purposes? Looking for an activity to do while searching for opponent? Or maybe an alternative to already existing websites?</p>
          <p>Say no more, we got you covered.</p>
          <p>See below what you can do using HearthLounge and if you are still in doubt about how you can use it, check our use cases right at the bottom!</p>
        </div>
        <div className="img-wrapper">
          <img src={HomeImg} alt=""/>
        </div>
          <div className="arrow"><span>❯</span></div>
      </section>
  )
};

IntroductionSection.propTypes = {
  greetings: PropTypes.string.isRequired
};

export default IntroductionSection;
