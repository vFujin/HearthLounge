import React, { Component } from 'react';
import _ from "lodash";
import {animateOnScroll} from "../../../utils/animate-on-scroll";
import PagesSection from "./sections/pages";
import UseCasesSection from "./sections/use-cases";
import IntroductionSection from "./sections/home";
import './styles.css';
import './styles-mobile.css';

const greetings = [
  "Hello.", "My greetings.", "Greetings, traveler.", "Well met!", "Greetings.", "The pleasure is mine.", "Greetings, friend.", "I greet you.", "Heh, Greetings.",
  "Hello, wanderer.", "Ah. Hello there.", "Hello there.",
  "Greetings, fellow seeker of truth.", "Hello, challenger.", "Hail, and well met.", "Blessings to you.", "Hail, friend.", "Mrrgrgrgl", "Hiyah friend!", "Nature's blessings upon you."
];

class Welcome extends Component {
  greetings = _.sample(greetings);

  componentDidMount(){
    document.title = this.greetings;
    animateOnScroll('.sections', 'section');
  }

  render() {
    return (
      <div className="container__page container__page--oneSided welcome">
        <div className="sections">
          <IntroductionSection greetings={this.greetings} />
          <PagesSection />
          <UseCasesSection />
        </div>
      </div>
    );
  }
}

export default Welcome;
