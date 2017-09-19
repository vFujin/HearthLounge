import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// import {getGithubIssues} from "../../../api/github-issues";
import {updateGithubIssues} from "../../../redux/actions/githubIssues";

class Issues extends PureComponent {

  componentDidMount(){
    const {updateGithubIssues} = this.props;
    // getGithubIssues(data => updateGithubIssues(data))
  }


  mapGithubIssues = (githubIssues) =>{
    return githubIssues.map(issue =>
    <li key={issue.id}>
      {issue.title}
    </li>)
  };

  render(){
    const {githubIssues} = this.props;
    return <ul>{this.mapGithubIssues(githubIssues)}</ul>
  }
}

const mapStateToProps = state =>{
  const {githubIssues} = state.issues;
  return {githubIssues};
};

const mapDispatchToProps = dispatch => {
  return {
    updateGithubIssues: githubIssues => dispatch(updateGithubIssues(githubIssues))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);