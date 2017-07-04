import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {stripDomains} from '../../../utils/reddit/posts';
import RedditPosts from './posts/posts';
class Reddit extends Component {

  componentDidMount() {
    let query = this.props.location.query.category || "hot";
    let domain = this.props.location.query.domain || false;
    if(this.props.params.id && this.props.posts.length < 1) {
      fetch(`https://www.reddit.com/r/hearthstone/${this.props.params.id}.json`)
          .then(res => res.json())
          .then(res => {
            console.log(res);
            const posts = res[0].data.children.map(obj => obj.data);

          });
    }
    fetch(`https://www.reddit.com/r/hearthstone/${query}.json`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          const posts = res.data.children.map(obj => obj.data);
          this.props.updatePosts(posts);
          if (domain) {
            let filteredPosts = posts.filter(post => stripDomains(post) === domain);
            this.props.updateFilteredPosts(filteredPosts);
          }
        });
  }

  render() {
    return React.cloneElement(this.props.children, {
      posts: this.props.posts,
      filteredPosts: this.props.location.query.domain ? this.props.filteredPosts : null,
      cards: this.props.cards
    });
  }
}

const mapStateToProps = (state) =>{
  const {posts, filteredPosts} = state.redditPosts;
  return {posts, filteredPosts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) => dispatch({
      type: 'UPDATE_POSTS', posts
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