import React, {Component} from 'react';

let carousel = [
  {
    text: "Create your own decks and share with (site) community!",
    icon: "create-deck"
  },
  {
    text: "Participate in the forum discussion!",
    icon: "bubbles2"
  },
  {
    text: "Create your own decks!",
    icon: "create-deck"
  }
];

export class Carousel extends Component {

  componentDidMount() {
    let slides = document.querySelectorAll('.slides .slide');
    let currentSlide = 0;
    slides[0].className = 'slide active';
    setInterval(nextSlide, 5000);

    function nextSlide() {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].className = 'slide active';
    }
  }

  render() {
    return (
        <div className="carousel">
          <ul className="slides">
            {carousel.map((slide, index) =>
                <li className="slide">
                  <p>{slide.text}</p>
                  <span className={`hs hs-icon icon-${slide.icon}`}></span>
                </li>
            )}
          </ul>
        </div>
    )
  }
}