import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
export class ExpansionSlider extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: false,
      slideInterval: 5000,
      showVideo: {},
    };
  }

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Optional description...',
        sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
        <ImageGallery
            ref={i => this._imageGallery = i}
            items={images}
            slideInterval={5000}
            showBullets={this.state.showBullets}
            showFullscreenButton={this.state.showFullscreenButton}
            showPlayButton={this.state.showPlayButton}
            showThumbnails={this.state.showThumbnails}
        />
    );
  }
}