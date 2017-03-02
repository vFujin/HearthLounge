import React, {Component} from 'react';
import {carousel} from './data';
export class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    let currentDot = this.props.handleCurrentDotChange;
    let slides = document.querySelectorAll('.slides .slide');
    let currentSlide = 0;
    slides[0].className = 'slide active';
    let interval = setInterval(()=>nextSlide(currentDot), 5000);
    this.setState({interval});

    function nextSlide(currentDot) {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide + 1) % slides.length;
      currentDot(currentSlide);
      slides[currentSlide].className = 'slide active';
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  render() {
    return (
        <div className="carousel">
          <ul className="slides">
            {carousel.map((slide, index) =>
              <li className="slide" key={index}>
                <p>{slide.text}</p>
                <span className={`hs hs-icon icon-${slide.icon}`}></span>
              </li>
            )}
          </ul>
        </div>
    )
  }
}