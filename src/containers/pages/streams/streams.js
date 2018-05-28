import React, { Component } from 'react';
import {TwitchClientId} from '../../../keys';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Loader from '../../../components/loaders/diamond/loader';
import 'whatwg-fetch';

export class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streams: [],
      activeStreamer: null
    };
  }

  componentDidMount() {
    fetch('https://api.twitch.tv/kraken/search/streams?query=hearthstone&limit=10', {
      headers: {
        "Accept": 'application/vnd.twitchtv.v5+json',
        "Client-Id": TwitchClientId
      }
    })
      .then(r => r.json())
      .then(data => {
        console.log(data.streams);
        this.setState({
          streams: data.streams,
          activeStreamer: data.streams[0].channel.name
        })
      })
  }

  componentWillUnmount(){
    this.setState({
      streams: [],
      activeStreamer: null
    })
  }

  handlePreviewClick(e){
    let streamer = e.currentTarget.id;
    console.log(streamer);
    this.setState({
      activeStreamer: streamer
    })
  }

  loadIframe() {
    if (this.state.streams < 1) {
      return <Loader/>;
    }
    else {
      console.log(this.state.activeStreamer);
      return React.cloneElement(this.props.children, {activeStreamer: this.state.activeStreamer})
    }
  };


  render() {
    let path = this.props.params.channel;
    return (
        <div className="container__page container__page--twoSided streams">
          <div className="container__page--inner  container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar streams={this.state.streams} handlePreviewClick={(e)=>this.handlePreviewClick(e)}/>
          </div>

          <div className="container__page--inner container__page--right">
            <Topbar streams={this.state.streams} activeStreamer={path}/>
            <div className="content">
              {this.loadIframe()}
            </div>
          </div>
        </div>
    );
  }
}