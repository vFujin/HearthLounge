import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import RedditPosts from './posts/posts';
class Reddit extends Component{

  componentDidMount() {
    let query = this.props.location.query.category || "hot";
    fetch(`https://www.reddit.com/r/hearthstone/${query}.json`)
        .then(res => res.json())
        .then(res=>{
          const posts = res.data.children.map(obj => obj.data);
          this.props.updatePosts(posts);
          console.log(posts)
        });
  }

  render(){
    return React.cloneElement(this.props.children, {posts: this.props.posts});
  }
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     posts: [],
  //     post: '',
  //     active_post: '',
  //     post_permalink: '',
  //     active_tabmenu: 'hot',
  //     active_domain_filter: ''
  //   };
  //
  //   this.handleFilterClick = this.handleFilterClick.bind(this);
  // }
  //
  //

  //
  //
  // handleFilterClick = (e) => {
  //   e.preventDefault();
  //   let filter = e.currentTarget.id;
  //   if(filter !== this.state.active_tabmenu){
  //     fetch(`https://www.reddit.com/r/hearthstone/${filter}.json`)
  //       .then(res => res.json())
  //       .then(res=>{
  //           const posts = res.data.children.map(obj => obj.data);
  //           console.log(posts);
  //           this.setState({
  //             posts: posts
  //           })
  //         });
  //     this.setState({
  //       active_tabmenu: filter,
  //     });
  //   }
  // };
}

const mapStateToProps = (state) =>{
  const {posts} = state.redditPosts;
  return {posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) => dispatch({
      type: 'UPDATE_POSTS', posts
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);

Reddit.propTypes = {
  posts: PropTypes.array
};