import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';

class RedditPost extends Component{

  componentDidMount(){
    fetch(`https://www.reddit.com/r/hearthstone/comments/${this.props.params.id}.json`)
        .then(res => res.json())
        .then(res=>{
          const comments = res[1].data.children.map(obj => obj.data);
          this.props.updatePostComments(comments);
        });
  }

  createMarkup = (obj) =>{
    let html = obj.selftext_html;
    html = html.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace('<!-- SC_OFF -->', '')
        .replace('<!-- SC_ON -->', '')
        .replace('class', 'className');
    return {__html: html};
  };

  iframe = (src, index)=>{
    const height= 500, width= 500;
    return <iframe key={index} height={height} width={width} src={src}></iframe>
  };

  filterPosts = () => {
    return this.props.posts.filter(p => p.id === this.props.params.id).map((obj, index) => {
      let url = obj.url;
      let replacedYTUrl = url.replace("watch?v=", "embed/");
      let replacedYTShortenerUrl = url.replace("youtu.be/", "youtube.com/embed/");
      let replacedTwitchUrl = url.replace("https://clips.twitch.tv/", "");

      switch (obj.domain) {
        case 'self.hearthstone':
          return <div key={index} className="section-body" dangerouslySetInnerHTML={this.createMarkup(obj)}/>;
        case 'youtube.com':
          return this.iframe(replacedYTUrl, index);
        case 'youtu.be':
          return this.iframe(replacedYTShortenerUrl, index);
        case 'clips.twitch.tv':
          return this.iframe(`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`, index);
        default:
          window.open(url);
          break;
      }
    })
  };
  render() {
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar />
            <div className="choosen-deck-view">
              <div className="choosen-deck-details">
                <div className="section description">
                  <div className="section-header"><h1>
                    <span>{this.props.posts.filter(x => x.id === this.props.params.id).map(x => x.title)[0]}</span></h1></div>
                  {this.filterPosts()}
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
};

const mapStateToProps = (state) =>{
  const {postComments} = state.redditPosts;
  return {postComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostComments: (postComments) => dispatch({
      type: 'UPDATE_POST_COMMENTS', postComments
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);

RedditPost.propTypes = {
  posts: React.PropTypes.array,
  params: React.PropTypes.object
};