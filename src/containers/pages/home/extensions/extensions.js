import React, {Component} from 'react';
import _ from 'lodash';
import {expansion_details} from "../../../../data/expansion-details";
import {adventure_details} from "../../../../data/adventure-details";
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
    const {url, overview, extension_topbar_tabs} = extension;
    const {img} = overview;
    let extensionType = _.keys(extension)[0];

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
    const adventures = _.takeRight(adventure_details, 2);
    const expansions = _.takeRight(expansion_details, 2);
    let extensions = _.flatten(_.zip(adventures, expansions));
    // console.log(extensions.filter(ext => Object.keys(ext).includes('adventure')));

    return (
      <div className="slider">
        {this.mapExtensions(extensions)}
      </div>
    );
  }

};

export default ExtensionsBlock;