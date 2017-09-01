import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {stripDomains} from '../../../utils/reddit/posts';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../redux/types/reddit";
import Loader from "../../../components/loader";
class Reddit extends Component {

  componentDidMount() {
    const {location, params, posts, updatePosts, updateFilteredPosts} = this.props;
    const {category, domain} = location.query;
    const {id} = params;
    let categoryQuery = category || "hot";
    let domainQuery = domain || false;
    let preload = id && posts.length < 1;
    // console.log(posts);
    updatePosts(categoryQuery);
    // fetch(`https://www.reddit.com/r/hearthstone/${preload ? params.id : categoryQuery}.json`)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(res);
    //       const posts = preload ? res[0].data.children.map(obj => obj.data) : res.data.children.map(obj => obj.data);
    //       updatePosts(posts);
    //       if (domainQuery) {
    //         let filteredPosts = posts.filter(post => stripDomains(post) === domainQuery);
    //         updateFilteredPosts(filteredPosts);
    //       }
    //     });
  }

  render() {
    const {cards, children, posts, location, filteredPosts } = this.props;
    const {domain} = location.query;
      return React.cloneElement(children, {
        filteredPosts: domain ? filteredPosts : null,
        cards,
        posts
      });
  }
}

const mapStateToProps = (state) =>{
  const {posts, filteredPosts} = state.redditPosts;
  return {posts, filteredPosts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (payload) => dispatch({
      type: FETCH_REDDIT_POSTS_REQUEST, payload
    }),
    updateFilteredPosts: (filteredPosts) => dispatch({
      type: 'UPDATE_FILTERED_POSTS', filteredPosts
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);

Reddit.propTypes = {
  posts: PropTypes.array
};