import React, {Component} from 'react';
import 'whatwg-fetch';
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
    const {main, sidebar, topbar} = this.props;
    return (
      <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
              {React.cloneElement(sidebar, {handleTabmenuClick: this.handleFilterClick.bind(this),
                                            active_tabmenu: this.state.active_tabmenu,
                                            active_domain_filter: this.state.active_domain_filter})}
          </div>
          <div className="container__page--inner container__page--right">
            <div className="topbar">
              {React.cloneElement(topbar, {active_tabmenu: this.state.active_tabmenu,
                                           active_domain_filter: this.state.active_domain_filter})}
            </div>
            <div className="content">
            {React.cloneElement(main, {posts: this.state.posts,
                                       post_permalink: this.state.post_permalink,
                                       handleRedditPostClick: this.handleRedditPostClick.bind(this)})}
            </div>
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