import 'isomorphic-fetch';

export function getGithubIssues(callback){
  fetch(`https://api.github.com/repos/vFujin/HearthLounge/issues`)
      .then(res => res.json())
      .then(res => {
        callback(res);
      })
}