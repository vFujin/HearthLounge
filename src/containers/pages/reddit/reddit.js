import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import RedditPosts from './posts/posts';
const Reddit = ({children}) => {
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
  return children;
};

export default Reddit;

Reddit.propTypes = {
  posts: PropTypes.array,
  post_permalink: PropTypes.string,
  active_post: PropTypes.string,
  handleReditPostClick: PropTypes.func,
  active_tabmenu: PropTypes.string,
  handleTabmenuClick: PropTypes.func
};