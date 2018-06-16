import React, {Component} from 'react';
import _ from 'lodash';
import {extension_details} from "../../../../globals/extension-details";
import ExtensionSidebar from "./assets/sidebar";
import ExtensionContent from "./assets/content";

class ExtensionsBlock extends Component {
  constructor(){
    super();
    this.state = {
      activeSlide: 0
    }
  }

  timer() {
    if(this.state.activeSlide === 3){
      this.setState({
        activeSlide: 0
      })
    } else {
      this.setState({
        activeSlide: this.state.activeSlide + 1
      });
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => this.timer(), 10000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  mapExtensions = (extensions) => extensions.reverse().map(extension => {
    const {url, extensionType, overview, extension_topbar_tabs} = extension;
    const {img} = overview;

    return (
      <div className="extension">
        <ExtensionSidebar extensionType={extensionType}
                          extensionUrl={url}
                          extensionTabs={extension_topbar_tabs}/>
        <ExtensionContent extensionType={extensionType}
                          url={url}
                          img={img}/>
      </div>
    )
  })[this.state.activeSlide];

  render(){
    let extensions = _.takeRight(extension_details, 4);

    return (
      <div className="slider">
        {this.mapExtensions(extensions)}
      </div>
    );
  }
}

export default ExtensionsBlock;
