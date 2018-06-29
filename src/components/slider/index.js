import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Slider extends Component {
  constructor(props){
    super(props);
    const {dotSymbol, overlayClassName, showDots, slides, inset} = props;
    const countSlides = slides.length;

    this.state = {
      activeSlide: 0,
      lastSlide: countSlides - 1,
      dotSymbol: dotSymbol || "●",
      overlayClassName: overlayClassName || null,
      showDots: showDots === false ? false : true,
      inset: inset ? "inset" : null,
      countSlides,
      slides
    };
  }

  handlePrevClick = () => {
    const {activeSlide, lastSlide} = this.state;
    const prevSlide = activeSlide === 0 ? lastSlide : activeSlide - 1;
    this.setState({activeSlide: prevSlide})
  };

  handleNextClick = () => {
    const {activeSlide, lastSlide} = this.state;
    const nextSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;
    this.setState({activeSlide: nextSlide})
  };

  handleDotClick = (index) => {
    this.setState({activeSlide: index})
  };

  renderDots = () => {
    const {activeSlide, slides, dotSymbol} = this.state;

    return slides.map((slide, index) => {
      const activeDot = activeSlide === index ? "active" : "not-active";

      return(
        <li className={`slider__dot slider__dot--${activeDot}`}
            key={`slide_${index}`}
            onClick={() => this.handleDotClick(index)}>
          {dotSymbol}
        </li>
      )
    });
  };

  render() {
    const {activeSlide, slides, overlayClassName, showDots, inset} = this.state;

    return (
      <div className={`slider ${overlayClassName} ${inset}`}>
        <span className="slider__prev" onClick={this.handlePrevClick}>❮</span>
        {slides[activeSlide]}
        <span className="slider__next" onClick={this.handleNextClick}>❯</span>
        {showDots && <ul className="slider__dots">{this.renderDots()}</ul>}
      </div>
    );
  }
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  dotSymbol: PropTypes.string,
  overlayClassName: PropTypes.string,
  showDots: PropTypes.bool
};

Slider.defaultProps = {
  overlayClassName: null,
  dotSymbol: "●",
  showDots: true
};

export default Slider;
