import React, {Component} from 'react';
import {Link} from 'react-router';
import Icon, {supported_domains} from '../domain-icons';

const RedditPosts = (props) => {

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

  const stripDomains = (post) => {
    let domain = post.domain;

    //Battle.net
    if(domain.includes(supported_domains[0]))
      return domain.split('.')[1]+"net";

    //Youtu.be
    else if(domain ===  supported_domains[1]){
      return domain.replace(supported_domains[1], "youtube");
    }

    else if(supported_domains.slice(2, 7).includes(domain)){
      return domain.replace(/self\.|\.com|clips\.|\.tv/g, "");
    }
    else return "default";
  };

  const checkDomain = (post) =>{
    let selfURL = `/reddit/post/${post.id}/${stripRedditURL(post.permalink)}`;

    switch (post.domain) {
      case supported_domains[1]:
      case supported_domains[2]:
      case supported_domains[3]:
      case supported_domains[4]:
      case supported_domains[5]:
      case supported_domains[6]:
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
                <td className="domain"><Link to={checkDomain(post)}>{Icon(post)}</Link></td>
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