import React, { Component } from 'react';
import welcomeInfo from '../../../globals/welcome';
import './styles.css';
import Icon from "../../../components/icon";

class Welcome extends Component {

  componentDidMount(){
    const animateOnScroll = (parentSelector, childSelector, duration = 500) => {
      const pSelector = document.querySelector(parentSelector);


      const pClientHeight = pSelector.clientHeight;
      [...document.querySelectorAll(childSelector)].map(el => {
        if(el.offsetTop >= pClientHeight){
          el.style.opacity= 0;
          el.style.transition = `all ${duration}ms ease`;
        }
      });

      pSelector.addEventListener('scroll', e => {
        [...document.querySelectorAll(childSelector)].map(el => {
          if(e.target.scrollTop >  (el.offsetTop - pClientHeight)){
            el.style.opacity= 1;
          }
        });
      });
    };

    animateOnScroll('.sections', 'section')

  }

  mapPages = () => {
    return welcomeInfo.map(p => (
      <section className="welcomePage" key={p.page}>
        <header>
          <h1>{p.page}</h1>
          <h4>{p.about}</h4>
        </header>
        <div className="section__content">
          <img src="" alt="foo"/>
          <div>
            <ul>
              {this.mapPageInfos(p.info)}
            </ul>
            <Icon name={p.icon}/>
          </div>
        </div>
      </section>
    ))
  };

  mapPageInfos = (pageInfo) => {
    return pageInfo.sort((a, b) => a.implemented < b.implemented).map((page, i) => (
      <li className={`pageInfo ${page.implemented ? "implemented" : "not-implemented"}`} key={i}>
        <span>{page.implemented ? "✓" : "|"}</span>
        <p>{page.text}</p>
      </li>
      )
    )
  };

  render() {
    return (
      <div className="container__page container__page--oneSided welcome">
        <div className="sections">
          {this.mapPages()}
        </div>
      </div>
    );
  }
}

export default Welcome;
