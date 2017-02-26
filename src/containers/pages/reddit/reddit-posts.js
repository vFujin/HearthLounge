import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export class RedditPosts extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      post: '',
      active_post: ''
    }
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/hearthstone.json')
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          console.log(posts);
          this.setState({
            posts: posts
          })
        });
  }

  handleRedditPostClick(active_post) {
    this.setState({
      active_post: active_post.selftext,
      post: active_post
    });
  }

  ifHasMedia(obj){
    let replacedYTUrl = obj.url.replace("watch?v=", "embed/");
    let replacedTwitchUrl = obj.url.replace("https://clips.twitch.tv/", "");
    // console.log(replacedTwitchUrl);
    if(obj.media == null) return this.state.active_post;
    if(obj.media != null){
      switch(obj.media.type){
        case 'youtube.com': return <iframe height="400" width="600" src={replacedYTUrl}></iframe>;
        case 'youtu.be': return <iframe height="400" width="600" src={replacedYTUrl}></iframe>;
        case 'clips.twitch.tv': return <iframe autoPlay={false} height="400" width="600" src={`https://clips.twitch.tv/embed?clip=${replacedTwitchUrl}`}></iframe>;
      }
    }
  }

  stripRedditURL(url){
    let split = url.split('/');
    let postUrl = split[split.length-2];
    return postUrl;
  }

  render(){
    let postURL = this.stripRedditURL;
    return (
      <table>
        <tr>
          <th>Upvotes</th>
          <th>Title</th>
          <td>Domain</td>
        </tr>
        {this.state.posts.map(post=>(
          <tr key={post.id} onClick={this.handleRedditPostClick.bind(this, post)}>
            <td><Link to={`post/${postURL(post.permalink)}`}>{post.ups}</Link></td>
            <td><Link to={`post/${postURL(post.permalink)}`}>{post.title}</Link></td>
            <td><Link to={`post/${postURL(post.permalink)}`}>{post.domain}</Link></td>
          </tr>
          )
        )}
      </table>
    )
  }
}