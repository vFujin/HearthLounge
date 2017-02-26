import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
export class RedditPosts extends Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     posts: [],
  //     post: '',
  //     active_post: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   axios.get('https://www.reddit.com/r/hearthstone.json')
  //       .then(res => {
  //         const posts = res.data.data.children.map(obj => obj.data);
  //         console.log(posts);
  //         this.setState({
  //           posts: posts
  //         })
  //       });
  // }




  stripRedditURL(url){
    let split = url.split('/');
    let postUrl = split[split.length-2];
    return postUrl;
  }

  render(){
    let postURL = this.stripRedditURL;
    return (
      <table>
        <tbody>
        <tr>
          <th>Upvotes</th>
          <th>Title</th>
          <td>Domain</td>
        </tr>
        {this.props.posts.map(post=>(
          <tr key={post.id} onClick={this.props.handleRedditPostClick.bind(this, post)}>
            {/*{console.log(this.props.posts)}*/}
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.ups}</Link></td>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.title}</Link></td>
            <td><Link to={`/reddit/post/${post.id}/${postURL(post.permalink)}`}>{post.domain}</Link></td>
          </tr>
          )
        )}
        </tbody>
      </table>
    )
  }
}