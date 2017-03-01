import React, {Component} from 'react';
import axios from 'axios';
export class Reddit extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      post: '',
      active_post: '',
      post_permalink: '',
      active_tabmenu: 'hot'
    }
  }

  componentDidMount() {
    let tabmenu = "hot" || this.state.active_tabmenu;
    console.log(tabmenu);
    axios.get(`https://www.reddit.com/r/hearthstone/${tabmenu}.json`)
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          console.log(posts);
          this.setState({
            posts: posts
          })
        });

    this.handleTabmenuClick();
  }

  handleRedditPostClick(active_post) {
    this.setState({
      active_post: active_post.selftext,
      post: active_post,
      post_permalink: active_post.permalink
    });
  }


  handleTabmenuClick(tabmenu) {

}

  render(){
    const {main, sidebar, topbar} = this.props;
    return (
      <div className="pageContainer subreddit list-with-filters-layout">
        {this.props.children}
          <div className="left-container">
            <div className="sidebar">
              {React.cloneElement(sidebar, {handleTabmenuClick: this.handleTabmenuClick.bind(this)})}
            </div>
          </div>
          <div className="right-container">
            <div className="topbar">
              {topbar}
            </div>
            {React.cloneElement(main, {posts: this.state.posts,
                                       post_permalink: this.state.post_permalink,
                                       handleRedditPostClick: this.handleRedditPostClick.bind(this)})}
          </div>
      </div>
    )
  }
}

Reddit.propTypes = {
  posts: React.PropTypes.array,
  post_permalink: React.PropTypes.string,
  active_post: React.PropTypes.string,
  handleReditPostClick: React.PropTypes.func,
  active_tabmenu: React.PropTypes.string,
  handleTabmenuClick: React.PropTypes.func
};