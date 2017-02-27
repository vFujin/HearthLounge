import React, {Component} from 'react';
import {Link} from 'react-router';
export class RedditPosts extends Component{

  icon(post){
    function iconTemplate(icon){
      return <span className={`hs hs-icon icon-${icon}`}></span>;
    }

    if(post.domain != "self.hearthstone"){
      let icon = post.domain.replace(/.com|clips.|.tv/g, "").toLowerCase();
      return iconTemplate(icon);
    }
    if(post.domain == "youtu.be"){
      return iconTemplate('youtube');
    }
    if(post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() != "tournament") {
      return iconTemplate('bubbles2');
    }
    if(post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() == "tournament") {
      return iconTemplate('trophy');
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
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{this.icon(post)}</Link></td>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.title.replace('&amp;', '&')}</Link></td>
          </tr>
          )
        )}
        </tbody>
      </table>
    )
  }
}