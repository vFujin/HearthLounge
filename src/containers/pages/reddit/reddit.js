import React, {Component} from 'react';
import axios from 'axios';
export class Reddit extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      post: '',
      active_post: '',
      post_permalink: ''
    }
  }

  componentDidMount() {
    axios.get('https://www.reddit.com/r/hearthstone.json')
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
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

  render(){
    return (
        <div className="pageContainer decks">
          {React.cloneElement(this.props.children, {posts: this.state.posts, post_permalink: this.state.post_permalink, handleRedditPostClick: this.handleRedditPostClick.bind(this)})}
        </div>
    )
  }
}