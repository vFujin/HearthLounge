import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export class RedditPosts extends Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     posts: [],
  //     post: '',
  //     active_post: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   axios.get('https://www.reddit.com/r/hearthstone.json')
  //       .then(res => {
  //         const posts = res.data.data.children.map(obj => obj.data);
  //         console.log(posts);
  //         this.setState({
  //           posts: posts
  //         })
  //       });
  // }

  returnIcon(post){
    if(post.domain != "self.hearthstone"){
      let icon = post.domain.replace(/.com|clips.|.tv/g, "").toLowerCase();
      return <span className={`hs hs-icon icon-${icon}`}></span>;
    }
    if(post.domain == "youtu.be"){
      return <span className={`hs hs-icon icon-youtube`}></span>;
    }
    if(post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() != "tournament") {
      return <span className={`hs hs-icon icon-bubbles2`}></span>;
    }
    if(post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() == "tournament") {
      return <span className={`hs hs-icon icon-trophy`}></span>;
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
        <tbody>
        <tr>
          <th>Upvotes</th>
          <th>Domain</th>
          <th>Title</th>
        </tr>
        {this.props.posts.map(post=>(
          <tr key={post.id} onClick={this.props.handleRedditPostClick.bind(this, post)}>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.ups}</Link></td>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{this.returnIcon(post)}</Link></td>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.title}</Link></td>

          </tr>
          )
        )}
        </tbody>
      </table>
    )
  }
}