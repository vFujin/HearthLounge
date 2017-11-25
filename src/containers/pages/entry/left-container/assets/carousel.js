import React, {Component} from 'react';
import {carousel} from './data';
import Icon from "../../../../../components/icon";
export class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {
    const time_period = 5000;
    const slides = document.querySelectorAll('.slides .slide');
    let currentDot = this.props.handleCurrentDotChange;
    let currentSlide = 0;
    slides[0].className = 'slide active';
    let interval = setInterval(()=>nextSlide(currentDot), time_period);
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
                <Icon name={slide.icon}/>
              </li>
            )}
          </ul>
        </div>
    )
  }
}