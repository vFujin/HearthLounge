import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {createMarkup, filterPosts} from '../../../../utils/reddit/post'
import Loader from '../../../../utils/loader';
import _ from 'lodash';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import CommentHeader from './comment/header';
import CommentBody from './comment/body';

class RedditPost extends Component{

  componentDidMount(){
    fetch(`https://www.reddit.com/r/hearthstone/comments/${this.props.params.id}.json`)
        .then(res => res.json())
        .then(res=>{
          const comments = res[1].data.children.map(obj => obj.data);
          this.props.updatePostComments(comments);
        });
  }

  componentWillUnmount(){
    this.props.updatePostComments(null);
  }

  isOfficialDev = (comment) =>{
    return comment.author_flair_css_class === "blizzard" ? "blizzard" : ''
  };

  handleCollapseClick = (i) => {
    let [...collapsedComments] = this.props.collapsedComments;
    collapsedComments[i] = !collapsedComments[i];
    this.props.toggleCollapse(collapsedComments)
  };

  renderComment = (comment, i) => {
    return (
        <TreeView
            key={comment.id}

            nodeLabel={<CommentHeader comment={comment} onClick={()=>this.handleCollapseClick(i)} isOfficialDev={this.isOfficialDev(comment)}/>}
            treeViewClassName={this.isOfficialDev(comment)}
            collapsed={this.props.postComments ? this.props.collapsedComments[i] : false}>
          <div className="comment">
            <div className="details">
              <CommentBody comment={comment}
                            cards={this.props.cards.allCards}
                            comments={this.props.postComments}
                            isOfficialDev={this.isOfficialDev(comment)}
                            renderComment={this.renderComment}/>
            </div>
          </div>
        </TreeView>
    )
  };

  render() {
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar />
            <div className="content">
              <div className="container__details">
                <div className="container__details--section container__details--description">
                  <div className="section__header">
                    <div className="line"></div>
                    <h1>{this.props.posts.filter(x => x.id === this.props.params.id).map(x => x.title)[0]}</h1>
                  </div>
                  <div className="section__body">
                    <div className="section__body--background">
                  {filterPosts(this.props)}
                    </div>
                  </div>
                </div>
                <div className="container__details--section container__details--comments">
                  <div className="section__header">
                    <div className="line"></div>
                    <h1>{this.props.posts.filter(x=>x.id === this.props.params.id).map(x=>x.num_comments)[0]} comments</h1>
                  </div>
                  <div className="section__body">
                    <div className="comments">
                      {this.props.postComments ? this.props.postComments.map((c, i) => this.renderComment(c, i)) : <Loader />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
};

const mapStateToProps = (state) =>{
  const {postComments, collapsedComments} = state.redditPosts;
  return {postComments, collapsedComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostComments: (postComments) => dispatch({
      type: 'UPDATE_POST_COMMENTS', postComments
    }),
    toggleCollapse: (collapsedComments) => dispatch({
      type:  'TOGGLE_POST_COMMENT', collapsedComments
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);

RedditPost.propTypes = {
  posts: React.PropTypes.array,
  params: React.PropTypes.object
};