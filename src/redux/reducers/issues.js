import {UPDATE_GITHUB_ISSUES} from "../types/issues";

const initialState = {
  githubIssues: []
};

export default function(state=initialState, action){
  switch(action.type){
    case UPDATE_GITHUB_ISSUES: return {
      ...state,
      githubIssues: action.githubIssues
    };
    default: return state;
  }
}