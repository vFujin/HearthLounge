import React, { Component } from 'react';
import './styles.css';

import {animateOnScroll} from "../../../utils/animate-on-scroll";
import PagesSection from "./sections/pages";
import UseCasesSection from "./sections/use-cases";


class Welcome extends Component {

  componentDidMount(){
    animateOnScroll('.sections', 'section');
  }


  render() {
    return (
      <div className="container__page container__page--oneSided welcome">
        <div className="sections">
          <PagesSection />
          <UseCasesSection />
        </div>
      </div>
    );
  }
}

export default Welcome;
