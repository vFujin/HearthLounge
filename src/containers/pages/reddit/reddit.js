import React, {Component} from 'react';
import axios from 'axios';
export class Reddit extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      active_post: ''
    }
  }


  componentWillUpdate(){
    function handleRedditPostClick(active_post){
      this.setState({active_post})
    }
    function listPosts(){
      return (
          this.state.posts.map(post=>
              <li key={post.id} onClick={this.handleRedditPostClick.bind(this, this.state.active_post)}>{post.title}</li>
          )
      )
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




  render(){
    return (
        <div className="pageContainer reddit">
          <ul>
            {}
          </ul>
          <div>
            {this.state.active_post}
          </div>
        </div>
    )
  }
}