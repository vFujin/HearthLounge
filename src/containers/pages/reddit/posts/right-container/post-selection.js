import React from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../../../../components/loaders/loader';
import {wrapDate} from '../../../../../utils/wrap-date';
import {checkIfStickied, checkIfBlizzardPost, stripDomains, checkTopbarIconFilters, checkDomain} from '../../utils/posts';
import Icon from "../../../../../components/icon";

const PostSelection = ({domain, posts, handlePostClick}) => {

  const {all, loading} = posts;

  const mapPosts = () =>{
      return all.map(post => (
          <tr id={post.id}
              className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)} ${checkTopbarIconFilters(domain, post)}`}
              key={post.id}
              onClick={() => handlePostClick(post.id)}>
            <td className="upvotes"><Link to={checkDomain(post)}><span>{post.ups}</span></Link></td>
            <td className="domain"><Link to={checkDomain(post)}>{<Icon type="reddit" domain={post.domain} linkFlairText={post.link_flair_text}/>}</Link></td>
            <td className="comments"><Link to={checkDomain(post)}><span>{post.num_comments}</span></Link></td>
            <td className="title"><Link to={checkDomain(post)}>{post.title.replace('&amp;', '&').replace('&gt;', '>')}</Link></td>
            <td className="created"><Link to={checkDomain(post)}>{wrapDate(post.created, post.edited)}</Link></td>
          </tr>
      ))
  };

  return (
      <div className="content scrollable">
          <div className="table-scroll">
            <table>
              <thead>
              <tr>
                <th className="upvotes">Upvotes</th>
                <th className="domain">Domain</th>
                <th className="comments">Comments</th>
                <th className="title"><div>Title</div></th>
                <th className="created"><div>Created</div></th>
              </tr>
              </thead>
              {
                loading
                  ? <Loader />
                  : <tbody>
                      {mapPosts()}
                    </tbody>
              }
            </table>
          </div>
      </div>
  )
};

export default PostSelection;