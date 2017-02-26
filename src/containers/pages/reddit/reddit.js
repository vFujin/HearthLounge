import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export class Reddit extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      post: '',
      active_post: ''
    }
  }

  handleRedditPostClick(active_post) {
    this.setState({
      active_post: active_post.selftext,
      post: active_post
    });
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
    return (
        <div className="pageContainer reddit">
          {this.props.children}
          <table>
            <tr>
              <th>Upvotes</th>
              <th>Title</th>
              <td>Domain</td>
            </tr>
            {this.state.posts.map(post=>(
              <tr key={post.id} onClick={this.handleRedditPostClick.bind(this, post)}>
                  <td><Link to={`reddit/${this.stripRedditURL(post.permalink)}`}>{post.ups}</Link></td>
                  <td><Link to={`reddit/${this.stripRedditURL(post.permalink)}`}>{post.title}</Link></td>
                  <td><Link to={`reddit/${this.stripRedditURL(post.permalink)}`}>{post.domain}</Link></td>
              </tr>
              )
            )}

          </table>
          <div>
            {this.state.posts.map(post=>(
                <div key={post.id}>
                  {this.ifHasMedia(post)}
                </div>
              ))}
          </div>
        </div>
    )
  }
}