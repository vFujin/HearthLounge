import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import RedditPosts from './posts/posts';
export class Reddit extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      post: '',
      active_post: '',
      post_permalink: '',
      active_tabmenu: 'hot',
      active_domain_filter: ''
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount() {
    let query = this.props.location.query.category || "hot";
    fetch(`https://www.reddit.com/r/hearthstone/${query}.json`)
        .then(res => res.json())
        .then(res=>{
          console.log(res)
          const posts = res.data.children.map(obj => obj.data);
          console.log(posts);
          this.setState({
            posts: posts
          })
        });
  }

  handleRedditPostClick(active_post) {
    this.setState({
      active_post: active_post.selftext,
      post: active_post,
      post_permalink: active_post.permalink
    });
  }


  handleFilterClick = (e) => {
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
      this.setState({
        active_tabmenu: filter,
      });
    }
  };


  render(){
    return this.props.children

  }
}

Reddit.propTypes = {
  posts: PropTypes.array,
  post_permalink: PropTypes.string,
  active_post: PropTypes.string,
  handleReditPostClick: PropTypes.func,
  active_tabmenu: PropTypes.string,
  handleTabmenuClick: PropTypes.func
};