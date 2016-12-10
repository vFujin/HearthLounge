import React, { Component } from 'react';
// import {ExpansionSlide} from './home.expansion-slide';
export class ExpansionSlider extends Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     showIndex: false,
  //     slideOnThumbnailHover: false,
  //     showBullets: true,
  //     infinite: true,
  //     showThumbnails: true,
  //     showFullscreenButton: false,
  //     showGalleryFullscreenButton: false,
  //     showPlayButton: false,
  //     showGalleryPlayButton: true,
  //     showNav: false,
  //     slideInterval: 5000,
  //     showVideo: {},
  //   };
    this.state = {};
  }
  handleNextSlide(){
    // let btn = document.getElementById('nextBtn');
      let li = document.querySelector('#slider-wrapper li').innerHTML;
      if(li === 1){
        return li = 2;

    }
  }
  render() {
    //
    // const images = [
    //   {
    //     original: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/czarna_gora.jpg',
    //     originalClass: 'featured-slide',
    //     thumbnailClass: 'featured-thumb',
    //     originalAlt: 'original-alt',
    //     thumbnailAlt: 'thumbnail-alt',
    //     sizes: 'Optional sizes (image sizes relative to the breakpoint)'
    //   },
    //   {
    //     original: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/klatwa_naxxramas.jpg'
    //   },
    //   {
    //     original: 'https://raw.githubusercontent.com/xNehel/clownfiesta-collector-react/master/src/images/home.expansion-slider/pewnej_nocy_w_karazhanie.jpg',
    //   }
    // ];
    //
    // return (
    //     <ImageGallery
    //         ref={i => this._imageGallery = i}
    //         items={images}
    //         slideInterval={5000}
    //         showBullets={this.state.showBullets}
    //         showFullscreenButton={this.state.showFullscreenButton}
    //         showPlayButton={this.state.showPlayButton}
    //         showThumbnails={this.state.showThumbnails}
    //     />
    // );

    return (
        <div className="expansion-slider">
          {/*<ul id="slider-wrapper">*/}
            {/*<ExpansionSlide index="1" title="czarna_gora"/>*/}
            {/*<ExpansionSlide index="2" title="klatwa_naxxramas"/>*/}
            {/*<ExpansionSlide index="3" title="pewnej_nocy_w_karazhanie"/>*/}
          {/*</ul>*/}
          {/*<button id="prevBtn" >Prev</button>*/}
          {/*<button id="nextBtn" onClick={this.handleNextSlide()}>Next</button>*/}
        </div>
    );
  }
}