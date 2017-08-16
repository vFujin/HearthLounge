
import {UPDATE_GITHUB_ISSUES} from "../types/issues";

export function updateGithubIssues(githubIssues){
  return {
    type: UPDATE_GITHUB_ISSUES,
    githubIssues
  }
}