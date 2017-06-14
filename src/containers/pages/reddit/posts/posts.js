import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';

class RedditPosts extends Component{
  componentDidMount() {
    let query = this.props.location.query.category || "hot";
    fetch(`https://www.reddit.com/r/hearthstone/${query}.json`)
        .then(res => res.json())
        .then(res=>{
          const posts = res.data.children.map(obj => obj.data);
          console.log(posts);
          this.props.updatePosts(posts);
        });
  }

  handlePostClick = (activePost) =>{
    this.props.updateActivePost(activePost);
  };

  handleCategoryClick = (e) => {
    e.preventDefault();
    let filter = e.currentTarget.id;
    if(filter !== this.state.active_tabmenu){
      fetch(`https://www.reddit.com/r/hearthstone/${filter}.json`)
        .then(res => res.json())
        .then(res=>{
            const posts = res.data.children.map(obj => obj.data);
            console.log(posts);
            this.setState({
              posts: posts
            })
          });
      this.props.toggleDomainFilter(filter)
    }
  };

  render() {
    const {posts, location, activePost} = this.props;
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            {/*<Sidebar/>*/}
            {/*{React.cloneElement(sidebar, {*/}
            {/*handleTabmenuClick: this.handleFilterClick.bind(this),*/}
            {/*active_tabmenu: this.state.active_tabmenu,*/}
            {/*active_domain_filter: this.state.active_domain_filter*/}
            {/*})}*/}
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar location={location}/>
            {/*{React.cloneElement(topbar, {*/}
            {/*active_tabmenu: this.state.active_tabmenu,*/}
            {/*active_domain_filter: this.state.active_domain_filter*/}
            {/*})}*/}

            <PostSelection posts={posts}
                           activePostPermalink={activePost}
                           handlePostClick={this.handlePostClick()}/>

          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) =>{
  const {posts, activePost} = state.redditPosts;
  return {posts, activePost};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) => dispatch({
      type: 'UPDATE_POSTS', posts
    }),
    updateActivePost: (activePost) => dispatch({
      type: 'UPDATE_ACTIVE_POST', activePost
    }),
    toggleDomainFilter: (activeDomainFilter) => dispatch({
      type: 'TOGGLE_DOMAIN_FILTER', activeDomainFilter
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);