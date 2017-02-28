import React, {Component} from 'react';
import {Link} from 'react-router';
export class RedditPosts extends Component {

  icon(post) {
    function iconTemplate(icon) {
      return <span className={`hs hs-icon icon-${icon}`}></span>;
    }

    if (post.domain == "youtu.be") {
      console.log(post.domain);
      return iconTemplate('youtube');
    }
    if (post.domain.includes("battle.net")) {
      return iconTemplate('battlenet');
    }
    if (post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() != "tournament") {
      return iconTemplate('bubbles2');
    }
    if (post.domain == "self.hearthstone" && post.link_flair_text.toLowerCase() == "tournament") {
      return iconTemplate('trophy');
    }
    if (post.domain != "self.hearthstone") {
      let icon = post.domain.replace(/.com|clips.|.tv/g, "").toLowerCase();
      return iconTemplate(icon);
    }
  }


  stripRedditURL(url) {
    let split = url.split('/');
    let postUrl = split[split.length - 2];
    return postUrl;
  }

  checkDomain(post) {
    let postURL = this.stripRedditURL;
    let selfURL = `/reddit/post/${post.id}/${postURL(post.permalink)}`;

    switch (post.domain) {
      case 'self.hearthstone':
      case 'twitter.com':
      case 'youtube.com':
      case 'youtu.be':
      case 'clips.twitch.tv':
        return selfURL;
      default:
        return post.url;
    }
  }

  render() {
    return (
      <div className="posts">
        <table>
          <tbody>
            <tr>
              <th>Upvotes</th>
              <th>Domain</th>
              <th>Title</th>
            </tr>
          {this.props.posts.map(post => (
              <tr key={post.id} onClick={this.props.handleRedditPostClick.bind(this, post)}>
                <td><Link to={this.checkDomain(post)}>{post.ups}</Link></td>
                <td><Link to={this.checkDomain(post)}>{this.icon(post)}</Link></td>
                <td><Link to={this.checkDomain(post)}>{post.title.replace('&amp;', '&').replace('&gt;', '>')}</Link>
                </td>
              </tr>
              )
          )}
          </tbody>
        </table>
      </div>
    )
  }
}