import React, {Component} from 'react';
import {Link} from 'react-router';

const supported_domains = ["youtu.be", "battle.net", "self.hearthstone", "twitter.com","youtube.com", "clips.twitch.tv", "reddit.com"];


const RedditPosts = (props) => {
  console.log(supported_domains.slice(2, 6));
  const icon = (post) => {
    let domain = post.domain;
    let flair_text = post.link_flair_text.toLowerCase();

    const iconTemplate = (icon) => <span className={`hs hs-icon icon-${icon}`}></span>;

    if (domain === supported_domains[0])
      return iconTemplate("youtube");
    if (domain.includes(supported_domains[1]))
      return iconTemplate("battlenet");
    if (domain === supported_domains[2] && flair_text !== "tournament")
      return iconTemplate("bubbles2");
    if (domain === supported_domains[2] && flair_text === "tournament")
      return iconTemplate("trophy");
    if (domain !== supported_domains[2]) {
      let icon = domain.replace(/.com|clips.|.tv/g, "").toLowerCase();
      return iconTemplate(icon);
    }
  };

  const checkIfStickied = (post) =>{
    let sticky = post.stickied;
    return sticky === true ? "hunter active" : sticky;
  };

  const checkIfBlizzardPost = (post) =>{
    let flair_text = post.link_flair_text.toLowerCase();
    return flair_text === "blizzard" ? "mage blizzard-official" : flair_text;
  };

  const stripRedditURL = (url) => {
    let split = url.split('/');
    return split[split.length - 2];
  };

  const stripDomains = (post) =>{
    let domain = post.domain;

    if(domain.includes(supported_domains[1]))
      return domain.split('.')[1]+"net";

    else if(domain ===  supported_domains[0]){
      return domain.replace(supported_domains[0], "youtube");
    }

    else if(supported_domains.slice(2, 7).includes(domain)){
      return domain.replace(/self.|.com|clips.|.tv/g, "");
    }
    else return "default";
  };

  const checkDomain = (post) =>{
    let selfURL = `/reddit/post/${post.id}/${stripRedditURL(post.permalink)}`;

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
  };

  const mapPosts = () =>{
    return (
        <table>
          <tbody>
          <tr>
            <th>Upvotes</th>
            <th>Domain</th>
            <th>Title</th>
            <th>Created</th>
          </tr>
          {props.posts.map(post => (
              <tr className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)}`}
                  key={post.id}
                  onClick={props.handleRedditPostClick.bind(this, post)}>
                <td className="upvotes"><Link to={checkDomain(post)}><span>{post.ups}</span></Link></td>
                <td className="domain"><Link to={checkDomain(post)}>{icon(post)}</Link></td>
                <td className="title"><Link to={checkDomain(post)}>{post.title.replace('&amp;', '&').replace('&gt;', '>')}</Link></td>
                <td className="created"><Link to={checkDomain(post)}>{post.created}</Link></td>
              </tr >
          ))}
          </tbody>
        </table>
    )
  };

  const ifPostsLoaded = () =>{
    if(props.posts.length < 1){
      return <div>Loading...</div>
    }
    else return mapPosts();
  };

  return (
    <div className="posts">
      {ifPostsLoaded()}
    </div>
  )
};

export default RedditPosts;

RedditPosts.propTypes = {
  handleRedditPostClick: React.PropTypes.func,
  posts: React.PropTypes.array
};