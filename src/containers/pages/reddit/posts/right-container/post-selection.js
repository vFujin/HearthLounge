import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Loader from '../../../../../utils/loader';
import {checkIfStickied, checkIfBlizzardPost, stripDomains, checkTopbarIconFilters, checkDomain} from '../../../../../utils/reddit/posts';
import Icon from '../../domain-icons';

const PostSelection = ({location, posts, filteredPosts, handlePostClick}) => {

  const mapPosts = (posts) =>{
    return (
        <div className="content">
          <table>
            <tbody>
            <tr>
              <th>Upvotes</th>
              <th>Domain</th>
              <th>Title</th>
              <th>Created</th>
            </tr>
            {posts.map(post => (
                <tr id={post.id} className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)} ${checkTopbarIconFilters(location, post)}`}
                    key={post.id}
                    onClick={handlePostClick}>
                  {/*{convertUnixTimestamp(post.created)}*/}
                  <td className="upvotes"><Link to={checkDomain(post)}><span>{post.ups}</span></Link></td>
                  <td className="domain"><Link to={checkDomain(post)}>{Icon(post)}</Link></td>
                  <td className="title"><Link to={checkDomain(post)}>{post.title.replace('&amp;', '&').replace('&gt;', '>')}</Link></td>
                  <td className="created"><Link to={checkDomain(post)}>{post.created}</Link></td>
                </tr >
            ))}
            </tbody>
          </table>
        </div>
    )
  };

  const ifPostsLoaded = () =>{
    if(posts.length < 1){
      return <Loader/>
    } else if (filteredPosts && filteredPosts.length < 1){
      return <p>Couldn't find any posts</p>
    }
    else return mapPosts(filteredPosts || posts);
  };

  return (
      <div className="posts">
        {ifPostsLoaded()}
      </div>
  )
};

export default PostSelection;

PostSelection.propTypes = {
  handleRedditPostClick: PropTypes.func,
  posts: PropTypes.array
};